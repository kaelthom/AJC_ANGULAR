import {Injectable} from '@angular/core';
import {Supplier} from '../model/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor() {
    this._suppliers = new Array<Supplier>();
    this._suppliers[0] = new Supplier(0, '123456789123', 'Jacky Enterprise');
    this._suppliers[1] = new Supplier(1, '1234567891235', 'Goooooogueul');
    this._suppliers[2] = new Supplier(2, '123456789125', 'Macronsoft');
  }

  private _suppliers;

  get suppliers() {
    return this._suppliers;
  }

  findAll(): Promise<Array<Supplier>> {
    return new Promise<Array<Supplier>>(resolve => resolve(this._suppliers));
  }

  findOne(id: number): Promise<Supplier> {
    return new Promise<Supplier>(resolve => resolve(this._suppliers[id]));
  }

  add(supplier: Supplier): Promise<Supplier> {
    return new Promise<Supplier>(resolve => {
      this.suppliers.add(supplier);
      resolve(this._suppliers);
    });
  }

  delete(supplier: Supplier): Promise<Supplier> {
    return new Promise<Supplier>(resolve => {
      this.suppliers.delete(supplier);
      resolve(this._suppliers);
    });
  }
}
