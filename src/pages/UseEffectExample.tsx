import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <button onClick={() => setHidden((prev) => !prev)}>
        {hidden ? "Show" : "Hide"}
      </button>
      {!hidden && <Counter />}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("render");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("unmount");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1 className="p-5 border-2 border-red-500">{count}</h1>
    </div>
  );
};

export default UseEffectExample;
