import {Component, Input, OnInit} from '@angular/core';
import {Supplier} from '../model/Supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  companyNameFilter: string;

  constructor() {
  }

  @Input()
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
