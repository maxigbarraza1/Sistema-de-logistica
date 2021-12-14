import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { BlockUrlGuard } from './guards/block-url.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
  { path: 'dashboard', 
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [BlockUrlGuard] },
  { path: '**', redirectTo:'auth'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
