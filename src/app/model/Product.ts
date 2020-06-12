import {Supplier} from './Supplier';

export class Product {
  id: number;
  private description: string;
  private price: number;
  private promo;

  constructor(id: number, name: string) {
    this.id = id;
    this._name = name;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _category: string;

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  private _supplier: Supplier;

  get supplier(): Supplier {
    return this._supplier;
  }

  set supplier(value: Supplier) {
    this._supplier = value;
  }

}
