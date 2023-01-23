import { Component } from '@angular/core';
import { LoginComponent } from '../admin/login/login.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  
 constructor( private service:DataService,
  login1:LoginComponent){
    
 }
 ngOnInit(): any {
  console.log(this.service.sessonData)
  // // sessionStorage.getItem("Msk@1999")
  // if(this.service.sessonData("Msk@1999") == null){
  //   alert("this is demo")
  // }
 }
}