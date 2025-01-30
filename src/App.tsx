import CourseGoal from "./components/CourseGoal";

import "./App.css";

export default function App() {
  return (
    <main>
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
