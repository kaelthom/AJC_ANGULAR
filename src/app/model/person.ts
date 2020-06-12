export class Person {
  public firstName: string;
  public lastName: string = 'Thomas';
  public age: number = 20;
  private id: number;

  constructor(id?: number, firstName?: string, lastName?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getNom(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
