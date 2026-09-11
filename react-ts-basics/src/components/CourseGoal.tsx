import { type PropsWithChildren } from "react";

interface CourseGoalProps extends PropsWithChildren {
  id: number;
  goalTitle: string;
  onDelete: (id: number) => void;
  // children: ReactNode;
}

export default function CourseGoal({ id, goalTitle, children, onDelete }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{goalTitle}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}

// type CourseGoalPropsType = PropsWithChildren<{goalTitle: string}>;

// const CourseGoal: FC<CourseGoalProps> = ({ goalTitle, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{goalTitle}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }

// export default CourseGoal;
