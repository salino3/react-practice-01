import { Gender, Pagination, TableData } from "./interfaces";

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

//
export const mockPaginationData: Pagination = {
  totalProducts: 30,
  products: [
    {
      id: 1,
      name: "Arianna",
      city: "Berlin",
      email: "arianna@gmail.com",
      age: 32,
      gender: Gender.Female,
      employee: true,
    },
    {
      id: 2,
      name: "Jacob",
      city: "Madrid",
      email: "jacob@gmail.com",
      age: 39,
      gender: Gender.PreferNotSay,
      employee: false,
    },
    {
      id: 3,
      name: "Larry",
      city: "London",
      email: "larry@gmail.com",
      age: 50,
      gender: Gender.Male,
      employee: true,
    },
    {
      id: 4,
      name: "Noelia",
      city: "Tokyo",
      email: "noelia@gmail.com",
      age: 28,
      gender: Gender.Female,
      employee: true,
    },
    {
      id: 5,
      name: "Carlos",
      city: "Barcelona",
      email: "carlos@gmail.com",
      age: 45,
      gender: Gender.Male,
      employee: false,
    },
    {
      id: 6,
      name: "Emily",
      city: "New York",
      email: "emily@gmail.com",
      age: 29,
      gender: Gender.PreferNotSay,
      employee: true,
    },
    {
      id: 7,
      name: "Michael",
      city: "Los Angeles",
      email: "michael@gmail.com",
      age: 35,
      gender: Gender.Male,
      employee: true,
    },
    {
      id: 8,
      name: "Sophie",
      city: "Paris",
      email: "sophie@gmail.com",
      age: 31,
      gender: Gender.Female,
      employee: false,
    },
    {
      id: 9,
      name: "David",
      city: "Toronto",
      email: "david@gmail.com",
      age: 42,
      gender: Gender.PreferNotSay,
      employee: true,
    },
    {
      id: 10,
      name: "Elena",
      city: "Rome",
      email: "elena@gmail.com",
      age: 27,
      gender: Gender.Female,
      employee: false,
    },
    {
      id: 11,
      name: "Marco",
      city: "Milan",
      email: "marco@gmail.com",
      age: 34,
      gender: Gender.Male,
      employee: true,
    },
    {
      id: 12,
      name: "Isabella",
      city: "Sydney",
      email: "isabella@gmail.com",
      age: 31,
      gender: Gender.PreferNotSay,
      employee: false,
    },
    {
      id: 13,
      name: "Juan",
      city: "Mexico City",
      email: "juan@gmail.com",
      age: 36,
      gender: Gender.Male,
      employee: true,
    },
    {
      id: 14,
      name: "Sara",
      city: "Stockholm",
      email: "sara@gmail.com",
      age: 29,
      gender: Gender.Female,
      employee: true,
    },
    {
      id: 15,
      name: "Gabriel",
      city: "Sao Paulo",
      email: "gabriel@gmail.com",
      age: 40,
      gender: Gender.Male,
      employee: false,
    },
    {
      id: 16,
      name: "Emma",
      city: "Toronto",
      email: "emma@gmail.com",
      age: 25,
      gender: Gender.Female,
      employee: true,
    },
    {
      id: 17,
      name: "Andreas",
      city: "Athens",
      email: "andreas@gmail.com",
      age: 33,
      gender: Gender.Male,
      employee: true,
    },
    {
      id: 18,
      name: "Mia",
      city: "Amsterdam",
      email: "mia@gmail.com",
      age: 27,
      gender: Gender.Female,
      employee: false,
    },
    {
      id: 19,
      name: "Lucas",
      city: "Berlin",
      email: "lucas@gmail.com",
      age: 38,
      gender: Gender.Male,
      employee: true,
    },
    {
      id: 20,
      name: "Sophia",
      city: "Paris",
      email: "sophia@gmail.com",
      age: 26,
      gender: Gender.Female,
      employee: false,
    },
    {
      id: 21,
      name: "Fernando",
      city: "Lisbon",
      email: "fernando@gmail.com",
      age: 43,
      gender: Gender.Male,
      employee: true,
    },
    {
      id: 22,
      name: "Olivia",
      city: "London",
      email: "olivia@gmail.com",
      age: 30,
      gender: Gender.Female,
      employee: true,
    },
    {
      id: 23,
      name: "Matteo",
      city: "Florence",
      email: "matteo@gmail.com",
      age: 37,
      gender: Gender.Male,
      employee: false,
    },
    {
      id: 24,
      name: "Luna",
      city: "Barcelona",
      email: "luna@gmail.com",
      age: 28,
      gender: Gender.Female,
      employee: true,
    },
    {
      id: 25,
      name: "Diego",
      city: "Buenos Aires",
      email: "diego@gmail.com",
      age: 39,
      gender: Gender.Male,
      employee: true,
    },
    {
      id: 26,
      name: "Valentina",
      city: "Santiago",
      email: "valentina@gmail.com",
      age: 32,
      gender: Gender.Female,
      employee: false,
    },
    {
      id: 27,
      name: "Sebastian",
      city: "Vienna",
      email: "sebastian@gmail.com",
      age: 41,
      gender: Gender.Male,
      employee: true,
    },
    {
      id: 28,
      name: "Julia",
      city: "Zurich",
      email: "julia@gmail.com",
      age: 24,
      gender: Gender.Female,
      employee: false,
    },
    {
      id: 29,
      name: "Lucia",
      city: "Madrid",
      email: "lucia@gmail.com",
      age: 35,
      gender: Gender.Female,
      employee: true,
    },
    {
      id: 30,
      name: "Hector",
      city: "Seville",
      email: "hector@gmail.com",
      age: 44,
      gender: Gender.Male,
      employee: false,
    },
    {
      id: 31,
      name: "Zara",
      city: "Palermo",
      email: "zara@gmail.com",
      age: 34,
      gender: Gender.Female,
      employee: false,
    },
  ],
};

// Functions
export interface PaginatedResponse<Pagination> {
  products: Pagination[];
  page: number;
  pageSize: number;
}
