import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class CartService {

public cartItemList : any =[];
public ticketList = new BehaviorSubject<any>([]);
  constructor() {
  }

  getTickets(){
    return this.ticketList.asObservable();
  }

  setTickets(ticket : any){
    this.cartItemList.push(...ticket);
    this.ticketList.next(ticket);
  }


  addtoCart(ticket:any){
    this.cartItemList.push(ticket);
    this.ticketList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
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





