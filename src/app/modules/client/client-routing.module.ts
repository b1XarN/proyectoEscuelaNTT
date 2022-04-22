import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './pages/client-page/client-page.component';

const routes: Routes = [

  {
    path: '',
    component: ClientPageComponent,
    outlet: 'seccion-home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
