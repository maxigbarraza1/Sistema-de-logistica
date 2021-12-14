import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { EstadoViajeComponent } from './pages/estado-viaje/estado-viaje.component';
import { SolicitarViajeComponent } from './pages/solicitar-viaje/solicitar-viaje.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';


const routes: Routes = [
  {path:'inicio',
  component: InicioComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'solicitar-viaje',
    component:SolicitarViajeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:'estado-viaje',
    component:EstadoViajeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:'historial',
    component:HistorialComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:'**',
    redirectTo:'inicio' //poner un 404 error
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
