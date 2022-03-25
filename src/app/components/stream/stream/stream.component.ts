import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mg-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {
  REPLAYS = [{
    nomMatch : 'Arsenal vs Liverpol',
    dateMatch : 'March 29, 2022 at 05 p.m.'
  },
  {
    nomMatch : 'Arsenal vs Liverpol',
    dateMatch : 'March 29, 2022 at 05 p.m.'
  },
  {
    nomMatch : 'Arsenal vs Liverpol',
    dateMatch : 'March 29, 2022 at 05 p.m.'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
