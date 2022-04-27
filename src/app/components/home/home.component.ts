import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModelServer, serverResponse} from "../../models/product.model";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import { TicketService } from 'src/app/services/ticket.service';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  products: ProductModelServer[] = [];
  TICKETS !:any;

  constructor(private productService: ProductService,
              private ticketService : TicketService,
              private cartService: CartService,
              private router:Router) {
  }

  ngOnInit() {
    ScrollReveal({
      reset : true,
      distance : '80px',
      duration : 2500,
      delay : 400
    });
    ScrollReveal().reveal('#welcome',{delay : 450});
    ScrollReveal().reveal('.image-welcome',{opacity: 0.5,rotate: {
      z: 70
  }});

    ScrollReveal().reveal('.image-welcome,#desc-text,#btn-homepage',{delay : 400,origin : 'left',});


    this.productService.getAllProducts(8).subscribe((prods: serverResponse ) => {
      this.products = prods.products;
      console.log(this.products);
    });
    this.ticketService.findAll()
      .subscribe(
        (data) => {
            console.log(data);
            this.TICKETS=data;
        },
        (error) => {
          console.log(error);
        }
      )
  }

  AddProduct(id: Number) {
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }
}
