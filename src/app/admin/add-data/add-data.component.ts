import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {

  name = '';
  phone = '';

  constructor(
    private Dataservice:DataService,
    private router: Router
    ){

  }
  ngOnInit(): void {
    if(sessionStorage.getItem("username")==null){
      this.router.navigate([""])
    }
  }
  submit(): void{
    
    const data={
      name: this.name,
      phone: this.phone
    }
    console.log(data)
    if(data.name !="" && data.phone !=""){
      this.Dataservice.create(data).subscribe(
        ()=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Data has been saved!',
            showConfirmButton: false,
            timer: 1900
          })
            this.router.navigate(["/api/form"])
        }
      )
    }
    else{
      alert("data not insert")
    }
    
  }
 

  
}
