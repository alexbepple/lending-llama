import {Card, CircularMinusButton, CircularPlusButton} from "./presentation";
import React, {useState} from "react";

export const CounterCard = () => {
  const [count, setCount] = useState(0);
  return (
    <Card>
      <span data-testid='counter-1be3bf29' className="mx-3">{count}</span>
      <CircularMinusButton onClick={() => setCount(x=>x-1)}/>
      <CircularPlusButton onClick={() => setCount(x=>x+1)}/>
    </Card>
  );
}
