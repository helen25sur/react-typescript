import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
      <p>
        <Button el="button" className="button" text="Submit" />
      </p>
      <p>
        <Button el="anchor" className="button" text="Another link" href="https://google.com" />
      </p>
    </main>
  );
}

export default App;
