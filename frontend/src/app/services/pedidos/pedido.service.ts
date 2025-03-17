import { Pedido } from '@app/models/Pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${environment.apiUrl}/pedidos`);
  }

  public post(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${environment.apiUrl}/pedidos`, pedido);
  }
}
