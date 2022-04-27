import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'products', // http://localhost:4200/home/products
    loadChildren: () => import(`@modules/products/products.module`).then(m => m.ProductsModule) // Modulo a cargar segun la ruta o path especificado
  },
  {
    path: 'client', // http://localhost:4200/home/client
    loadChildren: () => import(`@modules/client/client.module`).then(m => m.ClientModule)
  },
  {
    path: 'clients', // http://localhost:4200/home/client
    loadChildren: () => import(`@modules/clients/clients.module`).then(m => m.ClientsModule)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/home/clients'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
