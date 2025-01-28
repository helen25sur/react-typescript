var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName;
var userAge;
var isValid;
// userName = 30; will be error
userName = "Olena";
userAge = 33;
isValid = true;
// Union type
var userID = "abc1";
userID = 1234;
var user;
user = {
    name: userName,
    age: userAge,
    isAdmin: true,
    id: userID,
};
// user = {} not valid anymore
// Array
var hobbies; // string[] -- the same
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
var creds;
creds = {
    password: "fhfhfh",
    email: "test@test.com",
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) { }
// login(creds)
login(new AuthCredentials());
var admin;
admin = {
    permissions: ["login"],
    userName: "Olena",
};
// Literal Types
var role; // 'admin', 'user', 'editor'
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
var roles;
roles = ["admin", "editor"];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (user) {
        this.storage.push(user);
    },
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var newUser = merge({ name: "Olena" }, { age: 29 });
