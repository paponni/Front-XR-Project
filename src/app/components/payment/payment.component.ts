import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CartService } from 'src/app/services/cart.service';
import {render} from 'creditcardpayments/creditCardPayments';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mg-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public id_ticket:any;
  listItems : any;
  total:number;  
  tax :number = 29;
  TICKETS = [
  ];
  public id_zone:any;
  ZONES = [
    {
      id : 1,
      prix : 29.00
    },
    {
      id : 2,
      prix:30.00
    },
    {
      id : 3,
      prix:40.00
    },
    {
      id : 4,
      prix:60.00
    },

  ];

  @ViewChild('paypal',{static : true })
   paypalElement : ElementRef;


  constructor(private route:ActivatedRoute,private cartService:CartService, private toastrService : ToastrService) {
  
   }

   

  ngOnInit(): void {
    this.cartService.viewCart()
    .subscribe((data)=>{
      this.listItems = data['bufcartList'];
    });
    window.paypal
    .Buttons(
      {
        style : {
          layout : 'horizontal'
        },
        createOrder : (data , actions) => {
          return actions.order.create({
            purchase_units : [{
              amount : {
                value : this.total
              }
            }]
          })
        },
        onApprove : (data , actions)=>{
          var self= this;
          return actions.order.capture().then(function(orderData){
            self.successPayment();
            // sessionStorage.clear();
              //  actions.redirect('http://localhost:4200/achats');
          })
        }
      },
     
    ).render(this.paypalElement.nativeElement)
    this.id_zone=this.route.snapshot.paramMap.get('id');
    this.id_ticket=this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(params=>{
      this.total = params['total'];
      console.log("total :"+this.total);
    })
    
  }
  ngAfterViewInit(){
    
     
  }


  successPayment(){
    this.toastrService.success("Payment successful ","Success")

  }

  errorPayment(){
    this.toastrService.error("Error payment ","Error")

  }

}

interface customWindow extends Window{
 paypal ?: any
}

declare const window : customWindow;