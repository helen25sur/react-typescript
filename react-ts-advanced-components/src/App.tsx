import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);

  function handleSave(value: unknown) {
    const extractedValue = value as { name: string; age: string };
    console.log(extractedValue);
    customForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your name" type="text" ref={input} autoComplete="true" />
        <Input id="age" label="Your age" type="number" autoComplete="true" />
        <p>
          <Button className="button" type="submit" />
        </p>
      </Form>
    </main>
  );
}

export default App;
