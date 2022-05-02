import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientsTablePageComponent } from './pages/clients-table-page/clients-table-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    ClientsTablePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
