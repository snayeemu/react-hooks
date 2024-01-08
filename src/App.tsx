import { useState } from "react";
import UseStateExample from "./pages/UseStateExample";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <UseStateExample counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default App;
