type InputType = {
  label: string;
  id: string;
}

export default function Input({ label, id }: InputType) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </p>
  )
}