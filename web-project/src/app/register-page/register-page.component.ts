import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  userForm: any;
  users:any;
  user: User = new User();
  errorMessage: String = ""

  constructor(private _service:MyserviceService, private _toast:ToastrService,private _FormBuilder:FormBuilder, private _router: Router ) {}

  ngOnInit(): void {
    this.userForm =this._FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      confirmpwd: [''],
      agree: ['', [Validators.required]]
    })
    }
  
    submitData(form:NgForm){
      console.log("Form data ", form.value)
      console.log("Model: ",this.user)
      if(this.user._id==null){ //insert
        this._service.postUser(this.user).subscribe(res=>{
          let resData = JSON.parse(JSON.stringify(res));
          if(resData.message ==="success"){
            // alert("Insert Success!")
            this._toast.success("Inserted successfully!","SUCCESS")
            this._router.navigate(['/signinEmail']);
            localStorage.setItem('IdName',form.value.name)
          }
          else{
            alert("Fail!")
          }
        })
      }
    }
    get Name(){
      return this.userForm.controls['name']
    }
    get Email(){
      return this.userForm.controls['email']
    }
    get Phone(){
      return this.userForm.controls['phone']
    }
    get Password(){
      return this.userForm.controls['pwd']
    }
    get Agree(){
      return this.userForm.controls['agree']
    }
      
  }
  


