import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ChildParentModule } from './child-parent/child-parent.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';
import { ComponentcommunicationModule } from './componentcommunication/componentcommunication.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    // AdminModule,
    ChildParentModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ToastrModule,
    ComponentcommunicationModule,
    // MatButtonModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
