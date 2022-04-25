import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mg-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  public id:any;
  TICKETS = [
    {
      id : 1,
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500,
      image : 'christian-pulisic-chelsea.jpg'
    },
    {
      id : 2,
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500,
      image : 'barca.jpg'

    },
    {
      id : 3,
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500,
      image : 'el-clasico.jpeg'

    },
    {
      id : 4,
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500,
      image : 'christian-pulisic-chelsea.jpg'
    },
    {
      id : 5,
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500,
      image : 'christian-pulisic-chelsea.jpg'
    },
    {
      id  :6,
      nomMatch : "Real Madrid vs Valencia FC",
      dateMatch : "Sunday 19 mai 2022",
      heureMatch : "15h00",
      lieuMatch : "Estadio el madrigol",
      nbrTickets : "360",
      photo : "../../../../assets/img/ticket1.png",
      prix : 500,
      image : 'christian-pulisic-chelsea.jpg'
    }
  ];
  @ViewChild('pRef') pRef: ElementRef;
  Zones!:any;
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
      prix:30.00
    },
    {
      id : 4,
      prix:30.00
    },

  ];

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}