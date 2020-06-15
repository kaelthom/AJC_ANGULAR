import {Injectable} from '@angular/core';
import {Product} from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor() {
    this._products = new Array<Product>();
    this._products[0] = new Product(0, 'Pc Asus', 1500, 10);
    this._products[1] = new Product(1, 'Book', 17, 0);
    this._products[2] = new Product(2, 'Banana', 0.5, 0);
  }

  private _products;

  get products() {
    return this._products;
  }

  findAll(): Promise<Array<Product>> {
    return new Promise<Array<Product>>(resolve => resolve(this._products));
  }

  findOne(id: number): Promise<Product> {
    return new Promise<Product>(resolve => resolve(this._products[id]));
  }

  add(product: Product): Promise<Array<Product>> {
    return new Promise<Array<Product>>(resolve => {
      this.products.add(product);
      resolve(this._products);
    });
  }

  delete(id: number): Promise<Array<Product>> {
    return new Promise<Array<Product>>(resolve => {
      this.products.delete(this.products[id]);
      resolve(this.products);
    });
  }

}
