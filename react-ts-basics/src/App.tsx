import { useState } from "react";

import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";

import imgGoals from './assets/goals.jpg';

type Goal = {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal() {
    const newGoal: Goal = {
      id: Math.random(),
      title: 'Add Typescript into project',
      description: 'Rewrite Tic-Tac-Toe Game together with Typescript'
    };

    setGoals(prev => {
      const newCopyGoals = [...prev];
      newCopyGoals.push(newGoal);
      return newCopyGoals;
    });
  }

  return (
    <main>
      <Header image={{ src: imgGoals, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add New Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal goalTitle={goal.title} >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>


    </main>
  );
}
