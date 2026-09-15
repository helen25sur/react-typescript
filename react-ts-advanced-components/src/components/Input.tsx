import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputType = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputType>(function (
  { label, id, ...props },
  ref,
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
