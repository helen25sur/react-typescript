import CourseGoal from "./CourseGoal.tsx";
import { type Goal } from "../App.tsx";

type CourseGoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals && goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal goalTitle={goal.title} onDelete={onDeleteGoal} id={goal.id}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  )
}