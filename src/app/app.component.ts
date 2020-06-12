import {Component} from '@angular/core';
import {Person} from './model/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbaseproject';
  theColor = 'blue';
  anonymous = new Person(1, 'John', 'Doe');

  toggleColor() {
    if (this.theColor === 'blue') {
      this.theColor = 'red';
    } else {
      this.theColor = 'blue';
    }
  }

  changeFirstName() {
    this.anonymous.firstName = 'Jack';
    this.anonymous.lastName = 'yChan';
    this.anonymous.age = 15;
  }

  display(e) {
    alert(e.target.innerHTML);

  }
}
