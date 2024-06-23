import { Gender, TableData } from "./interfaces";

export const mockTableData: TableData[] = [
  {
    id: 1,
    name: "Arianna",
    city: "Berlin",
    email: "arianna@gmail.com",
    age: 32,
    gender: Gender?.Female,
    employee: true,
  },
  {
    id: 2,
    name: "Jacob",
    city: "Madrid",
    email: "jacob@gmail.com",
    age: 39,
    gender: Gender?.PreferNotSay,
    employee: false,
  },
  {
    id: 3,
    name: "Larry",
    city: "London",
    email: "larry@gmail.com",
    age: 50,
    gender: Gender?.Male,
    employee: true,
  },
  {
    id: 4,
    name: "Noelia",
    city: "Tokyo",
    email: "noealia@gmail.com",
    age: 28,
    gender: Gender?.Female,
    employee: true,
  },
];
