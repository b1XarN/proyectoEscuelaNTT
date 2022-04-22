import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsTablePageComponent } from './pages/clients-table-page/clients-table-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsTablePageComponent,
    outlet: 'seccion-home'
  },
  {
    path: 'products', // http://localhost:4200/products
    loadChildren: () => import(`@modules/products/products.module`).then(m => m.ProductsModule) // Modulo a cargar segun la ruta o path especificado
  },
  {
    path: 'client',
    loadChildren: () => import(`@modules/client/client.module`).then(m => m.ClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
