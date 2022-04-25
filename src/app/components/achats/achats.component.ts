import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'mg-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.scss']
})
export class AchatsComponent implements OnInit {

  listItems : any;

  constructor(private cartService : CartService,private router : Router) { }

  ngOnInit(): void {
    this.cartService.viewCart()
    .subscribe((data)=>{
      this.listItems = data['bufcartList'];
    })
  }

}
