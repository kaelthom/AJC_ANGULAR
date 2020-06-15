import {Component, OnInit} from '@angular/core';
import {Supplier} from '../model/Supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  companyNameFilter: string;

  constructor() {
    this._suppliers = new Array<Supplier>();
    this._suppliers[0] = new Supplier(0, '123456789123', 'accountNumberOk');
    this._suppliers[1] = new Supplier(1, '1234567891235', 'accountNumberNotOk');
  }

  private _suppliers: Supplier[];

  get suppliers(): Supplier[] {
    return this._suppliers;
  }

  ngOnInit(): void {
  }

  getFilteredList() {
    return this.companyNameFilter ?
      this.suppliers.filter(supplier => supplier.companyName.includes(this.companyNameFilter)) :
      this.suppliers;
  }
}
