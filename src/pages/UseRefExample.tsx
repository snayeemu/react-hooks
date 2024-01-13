import { useEffect, useRef } from "react";
import ForwardRefExample from "./ForwardRefExample";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <div>
      {/* <input
        className="border-4 rounded-2xl px-4 border-red-500"
        ref={myRef}
        type="text"
        name="name"
        id="name"
      /> */}
      <ForwardRefExample
        className="border-4 px-4 rounded-xl border-pink-600"
        ref={myRef}
      />
    </div>
  );
};

export default UseRefExample;
