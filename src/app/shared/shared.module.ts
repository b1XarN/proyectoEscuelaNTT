import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SideBarComponent,
    HeaderUserComponent,
    FormsModule
  ]
})
export class SharedModule { }
