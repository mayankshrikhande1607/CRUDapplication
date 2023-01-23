import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.css']
})
export class NoPageComponent {
  constructor(private route: Router){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This urs are not valid',
    })
    this.route.navigate([''])

  }
}
