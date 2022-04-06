import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'mg-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  token:string;
  email:string;
  CLIENT:any;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
      this.authService.getClient()
    .subscribe((data)=>{
      this.CLIENT=data;
      console.log(data);
    },
    (err)=> console.log(err))
  }

  logout(){
    this.authService.logout();
  }

}
