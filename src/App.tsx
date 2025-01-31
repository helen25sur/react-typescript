import { useState } from "react";

import Header from "./components/Header";

import "./App.css";

import goalsImg from './assets/goals.jpg';
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export interface CourseGoalObj {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalObj[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalObj = {
        title: goal,
        description: summary,
        id: Math.random(),
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList data={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
