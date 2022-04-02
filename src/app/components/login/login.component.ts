import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'mg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  err:number=0;
  user = new User();

  loginInvalid:boolean;
  constructor(private fb:FormBuilder,private router:Router
    ,private authService:AuthService) { 
      this.formLogin = this.fb.group({
        email : ['',Validators.required],
        password : ['',Validators.required]
      })
  }

  ngOnInit() {
  }

  onLoggedin(){
    const val = this.formLogin.value;
    console.log(val);
    console.log(val.email);
    console.log(val.password);

    this.authService.login(val.email,val.password)
    .subscribe((data)=>{
      console.log(data)
      let jwtToken = data['access_token'];
      this.authService.saveToken(jwtToken);
      this.router.navigate(['/']);
    },
    (err)=>{
      this.err = 1;
    })
  }
  

}
