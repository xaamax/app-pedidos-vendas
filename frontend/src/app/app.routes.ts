import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { PedidoDetalheComponent } from './pages/pedidos/pedido-detalhes/pedido-detalhe/pedido-detalhe.component';

import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'pedidos',
    canActivate: [AuthGuard],
    component: PedidosComponent,
    children: [
      { path: 'criar', component: PedidoDetalheComponent },
      { path: ':id', component: PedidoDetalheComponent },
    ],
  },
  { path: 'pedidos', canActivate: [AuthGuard], component: PedidosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
