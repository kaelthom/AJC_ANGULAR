import {Component} from '@angular/core';
import {Person} from './model/person';
import {ProductServiceService} from './service/product-service.service';
import {Product} from './model/Product';
import {Supplier} from './model/Supplier';
import {SupplierService} from './service/supplier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbaseproject';
  theColor = 'blue';
  anonymous = new Person(1, 'John', 'Doe');

  constructor(productService: ProductServiceService, supplierService: SupplierService) {
    productService.findAll().then(result => this._products = result);
    supplierService.findAll().then(result => this._suppliers = result);

  }

  private _suppliers: Array<Supplier>;

  get suppliers(): Array<Supplier> {
    return this._suppliers;
  }

  private _products: Array<Product>;

  get products(): Array<Product> {
    return this._products;
  }

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
