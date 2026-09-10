import { type PropsWithChildren } from "react";

interface CourseGoalProps extends PropsWithChildren {
  goalTitle: string;
  // children: ReactNode;
}

export default function CourseGoal({ goalTitle, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{goalTitle}</h2>
        {children}
      </div>
      <button>Delete</button>
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
