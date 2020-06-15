import {Supplier} from './Supplier';

export class Product {
  id: number;
  private description: string;

  constructor(id?: number, name?: string, price?: number, promo?: number) {
    this.id = id;
    this._name = name;
    this._price = price;
    this._promo = promo;
  }

  private _price: number;

  get price(): number {
    return this._price;
  }

  private _promo: number;

  get promo(): number {
    return this._promo;
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
