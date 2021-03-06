import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { Login2Component } from './login2.component';

const routes: Routes = [
  {path:'employee', component:LoginComponent},
  {path:'list', component:Login2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
