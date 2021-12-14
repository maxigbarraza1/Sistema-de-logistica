import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HistorialComponent } from './pages/historial/historial.component';
import { HomeComponent } from './pages/home/home.component';
import { ViajesComponent } from './pages/viajes/viajes.component';
import { TroubleComponent } from './pages/trouble/trouble.component';

const routes: Routes = [
  {path:'',
  children:[
    {path: 'historial', component: HistorialComponent},
    {path: 'home', component: HomeComponent},
    {path: 'viajes', component: ViajesComponent},    
    {path: 'trouble', component: TroubleComponent},
    {path: '**', redirectTo:'home'},
  ] 

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
