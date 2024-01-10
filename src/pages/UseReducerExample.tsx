import { useReducer } from "react";

type CurrentStateType = {
  count: number;
};

type ActionType = {
  type: "increment" | "decrement" | "incrementByAmount";
  payload?: number;
};

const UseReducerExample = () => {
  const initialState = { count: 0 };

  const reducer = (currentState, action: ActionType) => {
    switch (action.type) {
      case "increment":
        return { count: currentState.count + 1 };

      case "decrement":
        return { count: currentState.count - 1 };

      default:
        return currentState.count;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn bg-blue-500"
      >
        increment
      </button>
      <button
        onClick={() => dispatch({ type: "incrementByAmount", payload: 3 })}
        className="btn bg-blue-500"
      >
        incrementBy3
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn bg-red-500"
      >
        decrement
      </button>
    </div>
  );
};

export default UseReducerExample;
