import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ViajesComponent } from './pages/viajes/viajes.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ListasComponent } from './pages/listas/listas.component';

const routes: Routes = [{ path:'',
children:[
  {path:'home', component:HomeComponent},
  {path:'registro', component:RegistroComponent},
  {path:'viajes', component:ViajesComponent},
  {path:'historial', component:HistorialComponent},
  {path:'listas', component:ListasComponent},
  {path:'**', redirectTo:'home'},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
