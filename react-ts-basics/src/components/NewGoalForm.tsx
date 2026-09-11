import { useRef, type SubmitEvent } from "react";

type NewGoalFormProps = {
  onAddGoal: (title: string, description: string) => void;
};

export default function NewGoalForm({ onAddGoal }: NewGoalFormProps) {
  const goals = useRef<HTMLInputElement>(null); // by default undefined and it has error in input 
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(evt: SubmitEvent<HTMLFormElement>) {
    evt.preventDefault();

    const enteredGoal = goals.current!.value;
    const enteredSummary = summary.current!.value;

    evt.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);

    // const formData = new FormData(evt.currentTarget);
    // const goal = formData.get("goal");
    // const summary = formData.get("summary");
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" name="goal" ref={goals} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" name="summary" ref={summary} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  )
}