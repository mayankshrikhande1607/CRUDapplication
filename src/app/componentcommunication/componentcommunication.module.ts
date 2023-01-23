import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParenttopComponent } from './parenttop/parenttop.component';
import { ChildbottomComponent } from './childbottom/childbottom.component';
import { ComdirectiveDirective } from './comdirective.directive';



@NgModule({
  declarations: [
    ParenttopComponent,
    ChildbottomComponent,
    ComdirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentcommunicationModule { }
