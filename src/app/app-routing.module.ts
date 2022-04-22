import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [

  {
    path: 'home', // Ruta la cual representa el inicio de la pagina http://localhost:4200/home
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)

  },
  {
    path: '', // Ruta la cual representa el inicio de la pagina http://localhost:4200
    loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule)

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
