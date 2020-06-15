import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  value: number = 0;
  @Output()
  eventEmitter: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  increment() {
    this.value++;
    this.eventEmitter.emit(1);
  }

  decrement() {
    this.value--;
    this.eventEmitter.emit(-1);
  }

  zero() {
    this.eventEmitter.emit(-this.value);
    this.value = 0;
  }


  ngOnInit(): void {
  }

}
