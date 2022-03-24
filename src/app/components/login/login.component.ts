import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginInvalid:boolean;
  constructor() { }

  ngOnInit() {
  }
  checkLogin() {

    // this.AGENT = this.form.value;
    // console.log(this.username.value);
    // this.loginservice
    //   .authentificate(this.AGENT)
    //   .subscribe(
    //     (data) => {
    //       this.loginInvalid = false;
    //       this.router.navigate(['/clients']);
    //     },
    //     (error) => {
    //       this.loginInvalid = true;
    //     }
    //   );
  }

}
