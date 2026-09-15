import { type ComponentPropsWithoutRef } from "react";

type InputType = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({ label, id, ...props }: InputType) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  )
}