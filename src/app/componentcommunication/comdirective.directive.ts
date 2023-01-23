import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appComdirective]'
})
export class ComdirectiveDirective {

  constructor(ele:ElementRef) {
    ele.nativeElement.style.color= "red"
   }

}
