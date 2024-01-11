import { useEffect, useRef } from "react";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <div>
      <input
        className="border-4 rounded-2xl px-4 border-red-500"
        ref={myRef}
        type="text"
        name="name"
        id="name"
      />
    </div>
  );
};

export default UseRefExample;
