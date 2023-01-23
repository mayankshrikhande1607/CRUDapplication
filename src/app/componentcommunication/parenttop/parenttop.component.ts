import { Component } from '@angular/core';

@Component({
  selector: 'app-parenttop',
  templateUrl: './parenttop.component.html',
  styleUrls: ['./parenttop.component.css']
})
export class ParenttopComponent {
  // this data send to child componet with help of parenttop html
  data="this comes from parent"

  // this value variable is used to hold the value of childData argument value
  value=""

  // this method is used to take value which comes from child
  childData(value:string){
    this.value=value
  }
}

