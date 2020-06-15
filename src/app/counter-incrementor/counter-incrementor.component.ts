import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-incrementor',
  templateUrl: './counter-incrementor.component.html',
  styleUrls: ['./counter-incrementor.component.css']
})
export class CounterIncrementorComponent implements OnInit {
  public total: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateTotalValue(value: number) {
    this.total = this.total + value;
  }
}
