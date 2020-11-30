import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import {ListatweetsComponent} from './componentes/listatweets/listatweets.component'
import {PageNotFoundComponent} from './componentes/page-not-found/page-not-found.component'

const routes: Routes = [
  { path:'',redirectTo: '/login',pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path :'tweets',component: ListatweetsComponent},
  { path: 'registry', component: RegistroComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
