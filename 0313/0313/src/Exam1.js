import { useState } from "react";

const Exam1 = () => {
  const [number, setMessage] = useState(0);

  const onClickplus = () => {
    setMessage(number + 2);
  };
  const onClickminus = () => {
    setMessage(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickplus}>+2</button>
      <button onClick={onClickminus}>-1</button>
    </div>
  );
};
export default Exam1;
