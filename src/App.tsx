import { useState } from "react";

import Header from "./components/Header";

import "./App.css";

import goalsImg from './assets/goals.jpg';
import CourseGoalList from "./components/CourseGoalList";

export interface CourseGoalObj {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalObj[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalObj = {
        title: 'Learn React + TS',
        description: 'Learn it in depth!',
        id: Math.random(),
      }
      return [...prevGoals, newGoal]
    })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList data={goals} />
    </main>
  );
}
