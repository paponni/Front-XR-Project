import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mg-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  quantity:number = 1;
  constructor() { }

  ngOnInit(): void {
  }


  minus(){
    if(this.quantity != 1){
      this.quantity --;

    }

  }

  plus(){
      this.quantity++;
  }

}
