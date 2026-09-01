import CourseGoal from "./CourseGoal";
import { CourseGoalObj } from "../App";

type CourseGoalListType = {
  data: CourseGoalObj[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({ data, onDeleteGoal }: CourseGoalListType) {
  return <ul>
    <ul>
      {data.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  </ul>
}