import "./CourseGoal.css";

export default function CourseGoal({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="card">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
