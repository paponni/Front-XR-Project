import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registration } from 'src/app/models/registration.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'mg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister:FormGroup;
  userInfo : registration;
  constructor(private fb: FormBuilder ,private authService: AuthService,private router:Router) { 
    this.formRegister = this.fb.group({
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required],
      confirmpassword : ['',Validators.required]
    })
  }

  ngOnInit() {
  }


  onSignUp(){
    const val = this.formRegister.value;
    console.log(val);
    this.userInfo = {
        "firstName" : val.firstName,
        "lastName"  : val.lastName,
        "email" : val.email,
        "password" : val.password
    }
    this.authService.register(this.userInfo)
    .subscribe((data)=>{
      console.log(data);
    },
    (err)=> console.log(err))
    
    
  }
}
