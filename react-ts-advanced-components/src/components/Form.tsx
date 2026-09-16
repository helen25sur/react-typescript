import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
  type SubmitEvent,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form({
  onSave,
  children,
  ...otherProps
},
  ref) {

  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, (): FormHandle => {
    return {
      clear() {
        console.log('Clearing here');
        form.current?.reset();
      }
    }
  })

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = [];
    for (const [key, value] of formData.entries()) {
      data.push({ [key]: value });
    }
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} ref={form} {...otherProps}>
      {children}
    </form>
  );
});

export default Form;
