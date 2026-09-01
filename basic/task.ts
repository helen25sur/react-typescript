// 1. Створи тип User

// Користувач повинен мати:

// id — number
// name — string
// role — тільки "admin" | "user" | "editor"
// isActive — boolean

type User = {
  id: number;
  name: string;
  role: "admin" | "user" | "editor";
  isActive: boolean;
};

// 2. Створи масив користувачів
// Тип масиву має бути явно визначений через твій User.
// Створи 3 користувачів з різними ролями.

const users: Array<User> = [
  {
    id: 1,
    name: "Maxi",
    role: "editor",
    isActive: true,
  },
  {
    id: 2,
    name: "Helen",
    role: "admin",
    isActive: true,
  },
  {
    id: 3,
    name: "Alexis",
    role: "user",
    isActive: false,
  },
];

// 3. Напиши функцію findUser
// Вона повинна:
// отримати id
// отримати масив User
// повернути знайденого User
// Але є нюанс: якщо користувача немає — функція повинна повернути undefined.

type FindUser = (id: number, users: Array<User>) => User | undefined;

let fn: FindUser = function (id, users) {
  // const user = users.filter((u) => u.id === id)[0];
  // if (user) {
  //   return user;
  // } else {
  //   return undefined;
  // }
  return users.find((u) => u.id === id);
};

// 4. Напиши функцію getUserLabel
// Вона отримує User і повертає рядок.
// Для:
// admin  → "Olena — administrator"
// editor → "Olena — editor"
// user   → "Olena — user"
// Тут можеш використати type narrowing / type guard, хоча б через if або switch.

function getUserLabel(user: User): string {
  if (user.role === "admin") {
    return `${user.name} - administrator`;
  } else {
    return `${user.name} - ${user.role}`;
  }
}

// 5. І маленький бонус 😈
// Створи generic-функцію:
// function getFirstItem<T>(items: T[]): T | undefined

// Вона повинна повертати перший елемент масиву або undefined, якщо масив порожній.
// І перевір її на:
// getFirstItem(users)
// getFirstItem(["React", "TypeScript", "PHP"])
// getFirstItem([1, 2, 3])
// Подивись, чи TypeScript сам визначить T, коли ти не передаєш його вручну.

function getFirstItem<T>(items: T[]): T | undefined {
  if (items.length > 0) {
    return items[0];
  } else {
    return undefined;
  }
}

getFirstItem(users); // items: User[]
getFirstItem(["React", "TypeScript", "PHP"]); // items: string[]
getFirstItem([1, 2, 3]); //items: number[]
