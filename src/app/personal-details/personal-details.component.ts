import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mg-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  public id:any;
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
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
  }

}
