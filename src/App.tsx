import Header from "./components/Header";
import CourseGoal from "./components/CourseGoal";

import "./App.css";

import goalsImg from './assets/goals.jpg';

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <ul>
        <li>
          <CourseGoal title="Learn React + TS">
            <p>Learn it from the ground up</p>
          </CourseGoal>
        </li>
      </ul>
    </main>
  );
}
