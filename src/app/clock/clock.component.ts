import { Component, OnInit } from '@angular/core';
declare const clock:any;

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function a(){
      clock()
    }

    a()
  }

}
