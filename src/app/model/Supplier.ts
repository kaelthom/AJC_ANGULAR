export class Supplier {
  constructor(id: number, bankAccountNumber: string, companyName: string) {
    this._id = id;
    this._bankAccountNumber = bankAccountNumber;
    this._companyName = companyName;
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  private _bankAccountNumber: string;

  get bankAccountNumber(): string {
    return this._bankAccountNumber;
  }

  private _companyName: string;

  get companyName(): string {
    return this._companyName;
  }
}
