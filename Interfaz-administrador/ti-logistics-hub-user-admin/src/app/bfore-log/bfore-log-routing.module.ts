import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForgotComponent } from './pages/forgot/forgot.component';

const routes: Routes = [
  { 
    path: '', 
    children:[
      {path: 'forgot', component: ForgotComponent},
      {path: 'home', component: HomeComponent},
      {path: '**', redirectTo:'home'},
    ] 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BforeLogRoutingModule { }
