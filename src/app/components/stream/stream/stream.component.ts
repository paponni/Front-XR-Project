import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'mg-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {
  REPLAYS = [{
    nomMatch : 'Arsenal vs Liverpol',
    dateMatch : 'March 29, 2022 at 05 p.m.',
    image : 'stade1.png'
  },
  {
    nomMatch : 'Arsenal vs Liverpol',
    dateMatch : 'March 29, 2022 at 05 p.m.',
    image : 'stade2.png'
  },
  {
    nomMatch : 'Arsenal vs Liverpol',
    dateMatch : 'March 29, 2022 at 05 p.m.',
    image : 'stade3.png'
  }
]
  constructor() { }

  ngOnInit(): void {
    ScrollReveal({
      reset : true,
      distance : '80px',
      duration : 2500,
      delay : 400
    });

    ScrollReveal().reveal('.text-replay');
    ScrollReveal().reveal('.desc-replay');
    ScrollReveal().reveal('.replay-container',{delay : 400,origin : 'top'});


    
  }

}
