import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpcionesSideBar } from '@core/models/opciones-side-bar';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  opcionesArr: Array<OpcionesSideBar> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.opcionesArr = [

      {
        name: 'Clientes',
        icon: 'uil uil-users-alt',
        router: ['/', 'client']
      },

      {
        name: 'Productos',
        icon: 'uil uil-gold',
        router: ['/', 'products']
      }


    ]

  }

  goTo($event: any): void{
    this.router.navigate(['/', 'favorites'], {
      queryParams: {

        key1: 'value1',
        key2: 'value2',
        key3: 'value3',

      }
    })
    console.log($event);
  }

}
