export class User {
  firstName: string;
  lastName: string;
  birthDate: number | undefined;
  street: string;
  zipCode: number | undefined;
  city: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.birthDate = undefined;
    this.street = '';
    this.zipCode = undefined;
    this.city = ''
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}
