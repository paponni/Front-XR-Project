import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { tick } from '@angular/core/testing';
import {BehaviorSubject, Observable} from "rxjs";
import { serverResponse } from '../models/serverResponse.model';


@Injectable({
  providedIn: 'root'
})


export class CartService {

  apiUrl = 'http://localhost:8080';
  token : string;
  options : any;

public cartItemList : any =[];
public ticketList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {
  }

  getTickets(){
    return this.ticketList.asObservable();
  }

  setTickets(ticket : any){
    this.cartItemList.push(...ticket);
    this.ticketList.next(ticket);
  }


  addtoCart(ticket:any){
    // this.cartItemList.push(ticket);
    // this.ticketList.next(this.cartItemList);
    // this.getTotalPrice();
    // console.log(this.cartItemList);
    // console.log()
     this.token = localStorage.getItem('jwt');
    console.log(this.token)
     this.options = {
      headers : new HttpHeaders().set('Authorization','Bearer '+this.token)
    };
    let params = new HttpParams();
    params = params.append('id',ticket.id);

    console.log(this.options)  
    console.log(ticket.id)
    return this.http.get<any>(this.apiUrl+'/api/v1/client/addToCart?id='+ticket.id,this.options)
    .subscribe((data)=>console.log(data));

  }

  viewCart(){
    this.token = localStorage.getItem('jwt');
    this.options = {
      headers : new HttpHeaders().set('Authorization','Bearer '+this.token)
    };
    return this.http.get<any>(this.apiUrl+'/api/v1/client/viewCart',this.options)
  }













  getTotalPrice(): number{
    let grandTotal =0 ;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.ticketList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.ticketList.next(this.cartItemList);
  }
 

}





