import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childbottom',
  templateUrl: './childbottom.component.html',
  styleUrls: ['./childbottom.component.css']
})
export class ChildbottomComponent {
  // this itme value comes from parent with help of parent html
  @ Input() itme:any

  //childDataEvent contain parent chidData funtion to show data in parent html
  @Output() childDataEvent= new EventEmitter<string>()

}
