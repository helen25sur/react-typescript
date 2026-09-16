import { useRef, type FormEvent } from "react";

import "./NewGoal.css";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // new FormData(event.currentTarget);
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    onAddGoal(enteredGoal, enteredSummary);

    event.currentTarget.reset();
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="goal">Your goal</label>
      <input id="goal" name="goal" type="text" ref={goal} />
    </div>
    <div>
      <label htmlFor="summary">Short summary</label>
      <input id="summary" name="summary" type="text" ref={summary} />
    </div>
    <div>
      <button>Add Goal</button>
    </div>
  </form>
}