type CounterType = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: CounterType) => {
  console.log("render");

  return (
    <div>
      <h1 className="text-2xl">{counter}</h1>
      <button
        className="btn bg-blue-500 text-white px-2 py-3"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default UseStateExample;
