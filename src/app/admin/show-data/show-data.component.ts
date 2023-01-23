import { Component,OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/datas';

import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {
  x = sessionStorage.key(1)
  // @Input() hero:any // this take session key value
  Datas : Data[] = []
  constructor(private DataServices: DataService,
    private router:Router){

  }
  // parentFunction(data:any){
  //   console.log(data)
  //   this.name=data; // this take session key value
  // }

  ngOnInit():void{
    // this.d=this.DataServices.sessonData
    
    if(sessionStorage.getItem('username') == null){
      console.log(this.x)
      this.router.navigate([""])
      
    }
    
    this.DataServices.all().subscribe(
      Datas =>{
        this.Datas=Datas
      }
    )

      
      
  }
  prodectDel(id:number):void{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.DataServices.delete(id).subscribe(
          ()=>{
          this.Datas = this.Datas.filter(p=>p.id !==id);
          }
        )
      }
    })
  }
}
