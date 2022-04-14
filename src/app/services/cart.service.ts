import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class CartService {

  apiUrl = 'http://localhost:8080';
  token : string;
  options : any;
  token2:string;
  headers:any;

public cartItemList : any = [];
public ticketList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {
  }

  getTickets(){
    let c=0;
    for(var i=0 ; i< sessionStorage.length ; i++){
     c +=Number(sessionStorage.getItem(i.toString()));
    }
    // return this.ticketList.asObservable();
    return c;
  }

  setTickets(ticket : any){
    this.cartItemList.push(...ticket);
    this.ticketList.next(this.cartItemList);
  }


  addtoCart(ticket:any){
    // if(sessionStorage.length == 0){
    //   sessionStorage.setItem(ticket.id,"1");

    // }
    // else{sessionStorage.key(i)
    //   for(var i=0 ; i< sessionStorage.length ; i++){
    //     if(sessionStorage.key(i) == ticket.id){
    //       console.log("session storage "+sessionStorage.key(i))
    //       let prevQte = sessionStorage.getItem(ticket.id.toString())
    //       sessionStorage.setItem(ticket.id,(Number(prevQte) +1).toString());
    //     }
    //     else{
    //       sessionStorage.setItem(ticket.id,"1");
  
    //     }
    //    }

    // }

    if(sessionStorage.length == 0){
      sessionStorage.setItem(ticket.id,"1")
    }
    else{

      for(let i=0 ; i < sessionStorage.length ; i++){
        if(sessionStorage.key(i) == ticket.id){
          console.log("session storage"+sessionStorage.key(i))
          let prevQte = sessionStorage.getItem(ticket.id.toString())
          sessionStorage.setItem(ticket.id,(Number(prevQte) + 1).toString())
        }
        else{
          sessionStorage.setItem(ticket.id,"1")
        }
      }
    }
  
    
    // this.cartItemList.push(ticket);
    // this.ticketList.next(this.cartItemList);
    
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
    this.getTickets();
    this.token = localStorage.getItem('jwt');
    this.options = {
      headers : new HttpHeaders().set('Authorization','Bearer '+this.token)
    };
    return this.http.get<any>(this.apiUrl+'/api/v1/client/viewCart',this.options)
  }
  getToken(){
    return localStorage.getItem('jwt');
  }
  getHeader(){
    return {headers : new HttpHeaders().set('Authorization','Bearer '+this.getToken())}
  }
  deleteTicket(ticketID:number){
    this.token2 = localStorage.getItem('jwt');
    this.headers = {
      headers : new HttpHeaders().set('Authorization','Bearer '+this.token2)
    }
    return this.http.delete<any>(this.apiUrl+'/api/v1/client/delCart?bufcartID='+ticketID,this.headers)
  }
  updateCartItem(ticketID : number , quantite : number): Observable<any>{
      console.log("updated quantity = "+quantite);
      console.log("ticket id is "+ticketID)
      
    var map = {
      "id" : ticketID,
      "quantite" : quantite
    }
    return this.http.put<any>(this.apiUrl+'/api/v1/client/updateCart',map,this.getHeader());
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





