import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name="";
  parentData=[{
    name:'Mayank',
    age:'30',
  }
]
parentFunction(data:any){
  console.log(data)
  this.name=data;
}
}
