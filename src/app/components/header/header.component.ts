import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartModelServer} from "../../models/cart.model";

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  totalItem : number = 0;
  constructor(public cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.getTickets()
    .subscribe((res)=>{
      this.totalItem=res.length;
    })


  }

}
