import CourseGoal from "./components/CourseGoal";

import "./App.css";

export default function App() {
  return (
    <>
      <ul>
        <li>
          <CourseGoal
            title="Learn React + TS"
            description="Learn it from the ground up"
          />
        </li>
      </ul>
    </>
  );
}
