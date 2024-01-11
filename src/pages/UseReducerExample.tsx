import { ChangeEvent, useReducer } from "react";

type ActionType = {
  type: "addName" | "addEmail";
  payload?: string;
};

const UseReducerExample = () => {
  const initialState = { name: "", email: "" };

  const reducer = (currentState: typeof initialState, action: ActionType) => {
    switch (action.type) {
      case "addName":
        return { ...currentState, name: action.payload };

      case "addEmail":
        return { ...currentState, email: action.payload };

      default:
        return currentState.count;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2"
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          name="name"
          id="name"
        />
        <input
          className="border-2"
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
          type="email"
          name="email"
          id="email"
        />
        <button className="bg-blue-200" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseReducerExample;
