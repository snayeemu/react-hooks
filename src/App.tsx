// import { useState } from "react";
// import UseStateExample from "./pages/UseStateExample";
// import UseReducerExample from "./pages/UseReducerExample";
// import UseEffectExample from "./pages/UseEffectExample";
import { useContext } from "react";
import UseRefExample from "./pages/UseRefExample";
import { ThemeContext } from "./context/ThemeProvider";

type TThemeContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const App = () => {
  // const [counter, setCounter] = useState(0);
  if (useContext(ThemeContext)) {
    const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  }

  // console.log(setDark);

  return (
    <div>
      {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
      {/* <UseReducerExample /> */}
      {/* <UseEffectExample /> */}
      <button onClick={() => setDark((prev) => !prev)}>
        {dark ? "Light" : "Dark"}
      </button>
      <UseRefExample />
    </div>
  );
};

export default App;
