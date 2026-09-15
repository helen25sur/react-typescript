import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="name" label="Your name" type="text" ref={input} />
      <Input id="age" label="Your age" type="number" />
      <p>
        <Button className="button" />
      </p>
      <p>
        <Button className="button" href="https://google.com" />
      </p>
    </main>
  );
}

export default App;
