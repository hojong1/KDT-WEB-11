import { useState } from "react";

const Exam2 = () => {
  const [number, setMessage] = useState(0);

  const increase = () => {
    setMessage(number + 1);
  };
  const decresase = () => {
    setMessage(number - 2);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decresase}>decresase</button>
    </div>
  );
};
export default Exam2;
