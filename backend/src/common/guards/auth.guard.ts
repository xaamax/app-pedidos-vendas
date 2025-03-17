import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export class AuthGuard implements CanActivate {
  constructor (private configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const unprotected =
      Reflect.getMetadata('unprotected', context.getHandler()) ||
      Reflect.getMetadata('unprotected', context.getClass());
    if (unprotected) return true;

    const headers = context.switchToHttp().getRequest().headers;
    const { authorization } = headers as any;
    if (!authorization) {
      throw new BadRequestException(
        'Authorization Header é necessário no header da requisição.',
      );
    }
    const [type, token] = authorization.trim().split(' ');
    if (type !== 'Bearer')
      throw new BadRequestException('Authorization Bearer não encontrado');

    if (!token) throw new BadRequestException('Bearer token inválido');
    //   Verifica se o token é válido primeiro pelos "." necessários
    const [header, payload, signature] = token.split('.');
    if (!header || !payload || !signature)
      throw new BadRequestException('Token com formatação inválida.');

    const URL_JWT_AUTH = process.env.URL_JWT_AUTH

    if(!URL_JWT_AUTH) throw new Error('URL_JWT_AUTH é obrigatório.')
      
    const response = await fetch(URL_JWT_AUTH, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
    });

    if (response.status === 200) return true;

    throw new UnauthorizedException('Token inválido/expirado.');
  }
}
