import { useState } from "react";

const UseStateExample = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border-2"
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
      />
      <input
        className="border-2"
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
      />
      <button className="bg-blue-200" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UseStateExample;
