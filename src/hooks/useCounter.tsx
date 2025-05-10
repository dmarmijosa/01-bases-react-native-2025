import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(10);
  const increaseBy = (value: number): void => {
    // setcount(count + value);
    // setCount((current) => current + value);
    setCount(Math.max(value + count, 0));
  };
  return {
    //properties
    count,

    //actions
    increaseBy,
  };
};

export default useCounter;
