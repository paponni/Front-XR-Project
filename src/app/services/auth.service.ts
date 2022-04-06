import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client } from '../models/client.model';
import { registration } from '../models/registration.model';
import { User } from '../models/user';
import jwt_decode from 'jwt-decode';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL :string = 'http://localhost:8080';
  token:string;
  email:string;
  isloggedIn:boolean;
  user :User;
  constructor(private http:HttpClient) { }



  login(email:string,password:string){
    console.log('im here')
    let body = new URLSearchParams();
    body.set('email',email);
    body.set('password',password);

    let options = {
      headers : new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    };
    return this.http.post<User>(this.apiURL+'/login',body.toString(),options);
  }

  register(registration:registration){
    return this.http.post<string>(this.apiURL+'/api/v1/client/registration',registration);
  }


  getClient(){
    this.token  = localStorage.getItem('jwt');
    this.email = jwt_decode(this.token)['sub'];
    return this.http.get<client>(this.apiURL+'/api/v1/client/'+this.email );
  }


  saveToken(jwt:string){
    this.token =jwt;
    this.isloggedIn = true;
    localStorage.setItem('jwt',jwt);
    
  }



  getToken():string{
    return this.token;
  }
  getIsLoggedIn(){
  let jwt = localStorage.getItem('jwt');
  return !(jwt === null);

  }



  logout(){
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
  }
}
