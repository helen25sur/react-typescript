import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";

import imgGoals from './assets/goals.jpg';

export default function App() {
  return (
    <main>
      <Header image={{ src: imgGoals, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal goalTitle="First Goal" >
        <p>This is the most important goal</p>
      </CourseGoal>
    </main>
  );
}
