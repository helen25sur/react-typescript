// # TypeScript Practice — Task 2

// ## Mini Task Manager
// Створи невеликий TypeScript-модуль для роботи із задачами користувачів.
// У тебе є задачі, які можуть мати різний статус і пріоритет.

// ### 1. Task
// Створи власний тип для задачі.
// Кожна задача повинна мати:

// `id`
// `title`
// `status` — три можливі значення: `todo`, `in-progress`, `done`
// `priority` — `low`, `medium` або `high`
// `assignee` — ім'я користувача

interface Task {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  assignee: string;
}

// Створи масив із 4–5 задач.

const tasks: Task[] = [
  {
    id: 1,
    title: "Make task #2",
    status: "in-progress",
    priority: "high",
    assignee: "Olena",
  },
  {
    id: 2,
    title: "Start chapter #2 in Typescript course",
    status: "todo",
    priority: "high",
    assignee: "Olena",
  },
  {
    id: 3,
    title: "Visit the doctor",
    status: "todo",
    priority: "medium",
    assignee: "Olena",
  },
  {
    id: 4,
    title: "Continue work on the UUWG project",
    status: "todo",
    priority: "high",
    assignee: "Olena",
  },
  {
    id: 5,
    title: "Drink coffee",
    status: "done",
    priority: "low",
    assignee: "Olena",
  },
];

// ### 2. Знайти задачі

// Напиши функцію `getTasksByStatus`.
// Вона повинна отримувати масив задач і статус та повертати **тільки задачі з відповідним статусом**.
// Перевір її для кожного статусу.

function getTasksByStatus(tasks: Task[], status: Task["status"]): Task[] {
  return tasks.filter((t) => t.status === status);
}

getTasksByStatus(tasks, "in-progress");
getTasksByStatus(tasks, "todo");
getTasksByStatus(tasks, "done");

// ### 3. Знайти конкретну задачу
// Напиши функцію `getTaskById`.
// Якщо задача існує — поверни її.
// Якщо ні — функція повинна повернути `undefined`.

function getTasksById(tasks: Task[], id: number): Task | undefined {
  return tasks.find((t) => t.id === id);
}

// ### 4. Оновити статус
// Напиши функцію `updateTaskStatus`.
// Вона повинна отримувати:
// задачу;
// новий статус.

// Функція повинна повертати **нову задачу** з оновленим статусом.
// Не змінюй оригінальний об'єкт.

function updateTaskStatus(task: Task, newStatus: Task["status"]): Task {
  const taskCopy: Task = { ...task };
  taskCopy.status = newStatus;
  return taskCopy;
}

// ### 5. Generic
// Уяви, що пізніше цей код буде використовуватися не тільки для задач.
// Створи generic-функцію `getById`, яка отримує:
// масив будь-яких об'єктів;
// `id`.

// Вона повинна повертати знайдений об'єкт або `undefined`.
// Перевір її на масиві задач.

// Подумай: **як TypeScript може зрозуміти тип об'єкта, який ця функція повинна повернути?**

function getById<T extends { id: number }>(
  items: T[],
  id: number,
): T | undefined {
  return items.find((item: T) => item.id === id);
}

getById(tasks, 1);

// ### 6. Маленький бонус
// Створи окремий тип для результату операції пошуку:
// коли об'єкт знайдений;
// коли об'єкт не знайдений.
// Спробуй зробити це самостійно, використовуючи те, що вже знаєш про union types.

type SearchResult<T> = T | undefined;

// ### Умови

// Не використовуй:

// * `any`;
// * `as` для обходу помилок TypeScript;
// * `@ts-ignore`.

// Не шукай готове рішення.
// Якщо TypeScript показує помилку — спочатку спробуй зрозуміти, **який саме тип він очікує і який тип ти йому фактично передаєш**.

// ### Bonus challenge 😈
// Не використовуй підказки з формулювання завдання, щоб механічно вибрати `type` чи `interface`.
// Для кожної частини самостійно виріши, що тобі логічніше використати, і будь готова пояснити чому.
