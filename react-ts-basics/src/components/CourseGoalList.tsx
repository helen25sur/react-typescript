import CourseGoal from "./CourseGoal.tsx";
import { type Goal } from "../App.tsx";

type CourseGoalListProps = {
  goals: Goal[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  console.log(goals);
  return (
    <ul>
      {goals && goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal goalTitle={goal.title} >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  )
}