// let count: any = 5;
// count = true;

// let literal: 1;
// let changeName: 'literal types';
// let studen: null;

// const count = 1; // const count: 1
// const channelName = 'Easy Frontend'; // const channelName: 'Easy Frontend'
// const isActive = false; // const isActive: false

// let count = 1; // let count: number
// let channelName = 'Easy Frontend'; // let channelName: string
// let isActive = false; // let isActive: boolean

// const student = {
//   id: 1,
//   name: 'Easy Frontend',
// } as const;
// student.name = 'Easy Frontend';

// type Status = 'active' | 'inactive';
// type ProductStatus = 0 | 1 | 2 | 3;
// type StudentId = number | string;
// interface Student {
//   id: number | string;
//   name: string;
//   gender: 'male' | 'female';
//   grade: 'A' | 'B' | 'C' | 'D' | 'E';
// }

// let x: number | string = 1;
// x = 'super'; // works
// x = 123; // works
// x = false; // ts error: Type 'boolean' is not assignable to type 'string |number'.ts(2322)

interface BusinessPartner {
  name: string;
  credit: number;
  id: string;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  id: string;
  email: string;
  phone: string;
}
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
