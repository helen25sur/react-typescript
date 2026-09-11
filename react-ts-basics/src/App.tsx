import { useState } from "react";

import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";

import imgGoals from './assets/goals.jpg';

export type Goal = {
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

  function handleDeleteGoal(id: number) {
    setGoals(prev => prev.filter(goal => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: imgGoals, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add New Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
