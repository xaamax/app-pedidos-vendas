import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { PedidoDetalheComponent } from './pages/pedidos/pedido-detalhe/pedido-detalhe.component';
import { PedidoListaComponent } from './pages/pedidos/pedido-lista/pedido-lista/pedido-lista.component';

import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pedidos', redirectTo: 'pedidos/lista' },
  {
    path: 'pedidos',
    canActivate: [AuthGuard],
    component: PedidosComponent,
    children: [
      { path: 'lista', component: PedidoListaComponent },
      { path: 'criar', component: PedidoDetalheComponent },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
