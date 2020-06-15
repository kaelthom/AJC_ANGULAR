import {Component, OnInit} from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor() {
    this._products = new Array<Product>();
    this._products[0] = new Product(0, 'Product1');
    this._products[1] = new Product(1, 'Product2');

  }

  private _productNameFilter: string;

  get productNameFilter(): string {
    return this._productNameFilter;
  }

  set productNameFilter(value: string) {
    this._productNameFilter = value;
  }

  private _selectedProduct: Product;

  get selectedProduct(): Product {
    return this._selectedProduct;
  }

  private _products: Product[];

  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
    this._products = value;
  }

  ngOnInit(): void {
  }

  updateSelectedProduct(selectedProduct: Product) {
    this._selectedProduct = selectedProduct;
  }

  getFilteredList() {
    return this._productNameFilter ?
      this.products.filter(product => product.name.includes(this._productNameFilter)) :
      this.products;
  }
}
