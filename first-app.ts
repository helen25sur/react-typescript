let userName: string;
let userAge: number;
let isValid: boolean;

// userName = 30; will be error

userName = "Olena";
userAge = 33;
isValid = true;

type StringOrNum = string | number;

// Union type
let userID: StringOrNum = "abc1";
userID = 1234;

// Objects
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
let user: User;

user = {
  name: userName,
  age: userAge,
  isAdmin: true,
  id: userID,
};

// user = {} not valid anymore

// Array
let hobbies: Array<string>; // string[] -- the same

hobbies = ["Reading", "Watching movies", "Languages"];

// Functions
// Parameters types & type returned value
// void type - if function doesn't return anything
function add(a: number, b: number): number {
  return a + b;
}

// Type Aliases
// Create custom types
type AddFn = (a: number, b: number) => number;

// with callback
// function type - types of parameters and type of returned value
function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(3, 7, add);

// Interface for objects
interface Credentials {
  password: string;
  email: string;
}

// declaration merging
interface Credentials {
  role: string;
}

let creds: Credentials;

creds = {
  password: "fhfhfh",
  email: "test@test.com",
  role: "editor",
};

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  role: string;
  userName: string;

  constructor(credentials: Credentials, userName: string) {
    this.email = credentials.email;
    this.password = credentials.password;
    this.role = credentials.role;
    this.userName = userName;
  }
}

function login(credentials: Credentials) {}

// login(creds)
login(new AuthCredentials(creds, "helen"));

// Merging types
// with Types

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// }

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ['login'],
//   userName: 'Olena'
// }

// with Interface
interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {
  // empty or any additional properties
}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Olena",
};

type Role = "admin" | "user" | "editor";

// Literal Types
let role: Role; // 'admin', 'user', 'editor'
role = "admin";
role = "user";
role = "editor";
// role = 'else';  -- not valid

// Type Guards
function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ... do something
  }
}

// Generic types
let roles: Array<Role>;
roles = ["admin", "editor"];

// if I don't know in advance needed type
// custom generic type
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {
    this.storage.push(user);
  },
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "Olena" },
  { age: 29 },
);
