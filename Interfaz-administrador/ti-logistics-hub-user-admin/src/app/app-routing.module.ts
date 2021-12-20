import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild, CanActivate } from '@angular/router';
import { RoutesGuard } from './guard/routes.guard';

const routes: Routes = [
  { path: 'bforeLog', 
    loadChildren: () => import('./bfore-log/bfore-log.module').then(m => m.BforeLogModule) },
  { path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [RoutesGuard]},
  { path: '**', redirectTo:'bforeLog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
