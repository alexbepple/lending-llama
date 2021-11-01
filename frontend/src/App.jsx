import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card, CircularMinusButton, CircularPlusButton, InputWithLabel} from "./presentation";
import {CounterCard} from "./CounterCard";

export const App = () => {
  const [amount, setAmount] = useState(0.1);

  const [bestAllocation, setBestAllocation] = useState({})
  useEffect(() => {
    fetch(`/api/best-rate`)
      .then(x=>x.json())
      .then(setBestAllocation)
  }, [])

  const [allocations, setAllocations] = useState([])
  useEffect(() => {
    fetch(`/api/allocation?amount=${amount}`)
      .then(x=>x.json())
      .then(setAllocations)
  }, [amount])

  const count = useSelector(x => x.value)
  const dispatch = useDispatch()

  return (
    <>
      <div data-testid="allocation-c020b901">
        <Card>
          Best rate: {bestAllocation.rate && bestAllocation.rate.toFixed(2)}% ({bestAllocation.name})
        </Card>
      </div>
      <div className="pt-2">
        <Card>
          <InputWithLabel
            name="amount"
            label="BTC Amount"
            type="number"
            value={amount}
            step="0.1"
            placeholder="Amount of BTC you want to lend"
            onChange={e => setAmount(e.target.value)}
          />
          Allocations:
          {allocations.map(a => <li key={a.name+a.rate}>{a.rate && a.rate.toFixed(2)}% ({a.name})</li>)}
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
