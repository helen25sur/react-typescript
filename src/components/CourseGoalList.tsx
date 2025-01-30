import CourseGoal from "./CourseGoal";
import { CourseGoalObj } from "../App";

type CourseGoalListType = {
  data: CourseGoalObj[]
}

export default function CourseGoalList({ data }: CourseGoalListType) {
  return <ul>
    <ul>
      {data.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  </ul>
}