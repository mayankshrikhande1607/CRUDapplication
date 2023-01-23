import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NoPageComponent } from './no-page/no-page.component';



@NgModule({
  declarations: [
    MainComponent,
    NoPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
