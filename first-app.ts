let userName: string;
let userAge: number;
let isValid: boolean;

// userName = 30; will be error

userName = 'Olena';
userAge = 33;
isValid = true;

// Union type
let userID: string | number = 'abc1';
userID = 1234; 

// Objects
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: userName,
  age: userAge,
  isAdmin: true,
  id: userID
}

// user = {} not valid anymore

// Array
let hobbies: Array<string>; // string[] -- the same

hobbies = ['Reading', 'Watching movies', 'Languages'];
