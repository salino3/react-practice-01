export enum Gender {
  Male = "male",
  Female = "female",
  PreferNotSay = "prefer_not_say",
}

export interface TableData {
  id: number;
  name: string;
  city: string;
  email: string;
  age: number;
  gender: Gender;
  employee: boolean;
  birthDate?: string;
}

export interface Pagination {
  totalProducts: number;
  products: TableData[];
}
