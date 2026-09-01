import { type ReactNode } from "react";
import "./CourseGoal.css";

interface CourseGoalProps {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  children: ReactNode;
}

// type CourseGoalProps = PropsWithChildren<{title: string;}> --> also from React type, generic type

// const CourseGoal: FC<CourseGoalProps>  = ({title, children}) => {}
// FC- Functional Component, also generic type

export default function CourseGoal({ id, title, onDelete, children }: CourseGoalProps) {
  return (
    <article className="card">
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
