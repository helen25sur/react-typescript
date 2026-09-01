"use strict";
let userName;
let userAge;
let isValid;
// userName = 30; will be error
userName = "Olena";
userAge = 33;
isValid = true;
// Union type
let userID = "abc1";
userID = 1234;
let user;
user = {
    name: userName,
    age: userAge,
    isAdmin: true,
    id: userID,
};
// user = {} not valid anymore
// Array
let hobbies; // string[] -- the same
hobbies = ["Reading", "Watching movies", "Languages"];
// Functions
// Parameters types & type returned value
// void type - if function doesn't return anything
function add(a, b) {
    return a + b;
}
// with callback
// function type - types of parameters and type of returned value
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(3, 7, add);
let creds;
creds = {
    password: "fhfhfh",
    email: "test@test.com",
};
class AuthCredentials {
    email;
    password;
    userName;
}
function login(credentials) { }
// login(creds)
login(new AuthCredentials());
let admin;
admin = {
    permissions: ["login"],
    userName: "Olena",
};
// Literal Types
let role; // 'admin', 'user', 'editor'
role = "admin";
role = "user";
role = "editor";
// role = 'else';  -- not valid
// Type Guards
function performAction(action, role) {
    if (role === "admin" && typeof action === "string") {
        // ... do something
    }
}
// Generic types
let roles;
roles = ["admin", "editor"];
const textStorage = {
    storage: [],
    add(data) {
        this.storage.push(data);
    },
};
const userStorage = {
    storage: [],
    add(user) {
        this.storage.push(user);
    },
};
function merge(a, b) {
    return {
        ...a,
        ...b,
    };
}
const newUser = merge({ name: "Olena" }, { age: 29 });
