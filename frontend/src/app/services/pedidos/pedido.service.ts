import { Pedido } from '@app/models/Pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@app/environments/environment';
import { StatusPedido } from '@app/common/types/status-pedido.enum';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${environment.apiUrl}/pedidos`);
  }

  public createPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${environment.apiUrl}/pedidos`, pedido);
  }

  public updateStatusPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.patch<Pedido>(`${environment.apiUrl}/pedidos/${pedido.id}/status`, { status: StatusPedido.processado });
  }
}
