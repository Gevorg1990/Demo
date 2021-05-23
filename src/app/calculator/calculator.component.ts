import { Component, OnInit } from '@angular/core';

declare const myfunck:any;

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    function ab(){
      myfunck()
    }
    ab()
  }

}
