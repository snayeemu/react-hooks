import { useState } from "react";
import UseStateExample from "./pages/UseStateExample";
import UseReducerExample from "./pages/UseReducerExample";
import UseEffectExample from "./pages/UseEffectExample";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      {/* <UseReducerExample /> */}
      <UseEffectExample />
    </div>
  );
};

export default App;
