import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  form : FormGroup;
  id : number;
 

  constructor(
    private formBuilder: FormBuilder,
    private Dataservice:DataService,
    private route:ActivatedRoute,
    private router: Router
  ){ 
    this.form = this.formBuilder.group({
      name:'',
      phone:''
    })
    this.id = this.route.snapshot.params['id'];

    this.Dataservice.get(this.id).subscribe(
     data=> {
      this.form.patchValue(data)
      console.log(data)
     }
    )
    console.log(this.id)
  }


  ngOnInit(): void {
    if(sessionStorage.getItem("username")==null){
      this.router.navigate([""])
    }
  }
  
  update(): void{
    
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        this.Dataservice.update(this.id,this.form.getRawValue()).subscribe(
        ()=>{
          this.router.navigate(['/api/form'])
        }
      
      )
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
        this.router.navigate(['/api/form'])
      }
    })
      
  }

}
