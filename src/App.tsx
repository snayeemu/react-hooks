import { useState } from "react";
import UseStateExample from "./pages/UseStateExample";
import UseReducerExample from "./pages/UseReducerExample";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      <UseReducerExample />
    </div>
  );
};

export default App;
