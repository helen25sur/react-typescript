import { type ReactNode } from "react";

import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";

import { type Goal } from "../App.tsx";

type CourseGoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    )
  }

  let warningBox: ReactNode;

  if (goals.length >= 6) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting too many goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals && goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal goalTitle={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  )
}