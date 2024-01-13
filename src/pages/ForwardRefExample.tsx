import { forwardRef } from "react";

type TClassName = {
  className: string;
};

const ForwardRefExample = forwardRef<HTMLInputElement, TClassName>(
  ({ className }, inputRef) => {
    return (
      <div>
        <input
          ref={inputRef}
          className={className}
          type="text"
          name="name"
          id="name"
        />
      </div>
    );
  }
);

export default ForwardRefExample;
