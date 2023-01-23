import { HttpClient } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // signupForm !: FormGroup;
  signupForm = new FormGroup({
    username:new FormControl('',[Validators.required]),
    first_name: new FormControl('',[Validators.required]),
    last_name: new FormControl('',[Validators.required]),
    email: new FormControl('',[ Validators.required ,Validators.email]),
    password: new FormControl('',[Validators.required])
  });
 constructor(
  private formBuilder:FormBuilder,
  private http:HttpClient,
  private router: Router,
  // private toastr: ToastrService
 ){}
  ngOnInit(): void {
    // this.signupForm = this.formBuilder.group({
    //   firstName:["",Validators.required], 
    //   lastName:["",Validators.required],
    //   email:["",Validators.required,Validators.email],
    //   password:["",Validators.required]
    // })
  }
  signup(){
    console.log(this.signupForm.value)
    if(this.signupForm.value.username !='' && this.signupForm.value.first_name != '' && this.signupForm.value.last_name !=''&& 
    this.signupForm.value.email !='' && this.signupForm.value.password !=''){
      this.http.post<any>("http://127.0.0.1:8000/accounts/api/register/",this.signupForm.value).subscribe(
        res=>{
            console.log(res)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registraion successfully',
              showConfirmButton: false,
              timer: 2000
            })
          // this.toastr.success("Signup succesfully!!");
          this.signupForm.reset()
          this.router.navigate([''])
        }
      )
    }else{
      Swal.fire('Please complete the Form')
    }
   
  }
}
