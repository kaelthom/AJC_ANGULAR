import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/Product';
import {ProductServiceService} from '../service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  newProduct: Product = new Product();
  private productService: ProductServiceService;

  constructor(productService: ProductServiceService) {
    this.productService = productService;
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

  @Input()
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

  addProduct() {
    this.productService.add(this.newProduct).then(result => this._products = result);
  }
}
