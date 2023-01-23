import { Component,OnInit, Input , Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Output() parentFunction:EventEmitter<any>=new EventEmitter()
    @Input() hero:any
    data="mayank";
    ngOnInit(){
    }

    sendData(){
      // this function to send the data 
      this.parentFunction.emit(this.data)
    }
}
