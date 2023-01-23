import { HttpClient } from '@angular/common/http';
import { Component ,OnInit ,Output,EventEmitter} from '@angular/core';
import { FormGroup ,FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { first } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // @Output() parentFunction:EventEmitter<any>=new EventEmitter()
  loginform !: FormGroup
  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private service:DataService){

  }
  ngOnInit(): any {
   this.loginform = this.formBuilder.group({
    username:'',
    password:''
   })
   sessionStorage.clear()
  }

  login():any{
    this.service.login1(this.loginform.value.username,this.loginform.value.password).pipe(first()).subscribe(
      data =>{
        console.log(data)
        Swal.fire('Login successfully!!')
        this.router.navigate(["/api/form"])
      }
    )
    



    // this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
    //   const user = res.find((a:any)=>{
    //     return a.email == this.loginform.value.email && a.password == this.loginform.value.password
    //   })
      
    //   if(user){
    //     alert("login succesfully!!")
    //     sessionStorage.setItem("username",this.loginform.value.email)
    //     this.service.sessonData(this.loginform.value.email)
    //     // this.parentFunction.emit(this.loginform.value.email)
    //     // email:this.loginform.value.email
    //     this.router.navigate(["/api/form"])
    //   }
    //   else{
    //     alert("user not found")
    //   }
    // })
  }

}
