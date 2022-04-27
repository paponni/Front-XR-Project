import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';


@Component({
  selector: 'mg-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ScrollReveal({
      reset : true,
      distance : '80px',
      duration : 2500,
      
    });
    ScrollReveal().reveal('.text-demk',{delay : 450});
    
    ScrollReveal().reveal('.text-demou',{delay : 450,origin:'left',scale:0.2});
    ScrollReveal().reveal('#logo-animateit,.signup',{opacity: 0.5,origin:'right'});
    ScrollReveal().reveal('.text-demon ,.firsttitre',{delay : 450,scale:0.2});
    ScrollReveal().reveal('.text-demol,.video ',{delay : 100,scale:0.7,origin:'bottom'});
    
    
  }

}
