import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card, CircularMinusButton, CircularPlusButton, InputWithLabel} from "./presentation";
import {CounterCard} from "./CounterCard";

export const App = () => {
  const [amount, setAmount] = useState();
  const [allocation, setAllocation] = useState({})
  useEffect(() => {
    fetch(`/api/allocation?amount=${amount}`)
      .then(x=>x.json())
      .then(setAllocation)
  }, [amount])

  const count = useSelector(x => x.value)
  const dispatch = useDispatch()

  return (
    <>
      <Card>
        <InputWithLabel
          name="amount"
          label="BTC Amount"
          type="number"
          placeholder="Amount of BTC you want to lend"
          onChange={e => setAmount(e.target.value)}
        />
      </Card>
      <div className="pt-2" data-testid="allocation-c020b901">
        <Card>
        Best rate: {allocation.rate && allocation.rate.toFixed(2)}% ({allocation.name})
      </Card>
      </div>
      <div className="pt-2"><CounterCard/></div>
      <div className="pt-2"><Card>
        <span className="mx-3">{count}</span>
        <CircularPlusButton onClick={() => dispatch({type: 'counter/incremented'})}/>
        <CircularMinusButton onClick={() => dispatch({type: 'counter/decremented'})}/>
      </Card></div>
    </>
  );
}
