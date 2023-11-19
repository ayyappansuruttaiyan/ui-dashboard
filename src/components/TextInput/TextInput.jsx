import { useState } from "react";

export default function TextInput({ type, placeholder }) {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <input
      onChange={(e) => {
        setInput(e.target.value);
      }}
      value={input}
      type={type}
      placeholder={placeholder}
    />
  );
}
