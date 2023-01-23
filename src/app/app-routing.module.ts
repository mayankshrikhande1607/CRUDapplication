import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './admin/add-data/add-data.component';
import { AdminComponent } from './admin/admin.component';
import { EditDataComponent } from './admin/edit-data/edit-data.component';
import { LoginComponent } from './admin/login/login.component';
import { ShowDataComponent } from './admin/show-data/show-data.component';
import { SignupComponent } from './admin/signup/signup.component';
import { ChildComponent } from './child-parent/child/child.component';
import { ParentComponent } from './child-parent/parent/parent.component';
import { ChildbottomComponent } from './componentcommunication/childbottom/childbottom.component';
import { ParenttopComponent } from './componentcommunication/parenttop/parenttop.component';
import { NoPageComponent } from './main/no-page/no-page.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:'admin', component: AdminComponent
  },
  {
    path:'admin/add-data',component:AddDataComponent
  },
  {
    path:'api/form',component:ShowDataComponent
  },
  {
    path:'admin/edit-data/:id/edit',component:EditDataComponent
  },
  {
    path:'parent-child/parent',component:ParentComponent
  },
  {
    path:'parent-child/child',component:ChildComponent
  },
  {
    path:"admin/signup",component:SignupComponent
  },{
    path:'componentcommunication/parenttop',component:ParenttopComponent
  }
  ,{
    path:'componentcommunication/childbottom',component:ChildbottomComponent
  }
  ,{
    path:'**',component:NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
