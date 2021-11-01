import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Card, InputWithLabel} from "./presentation";
import {AllocationsTable} from "./presentation/AllocationsTable";
import {errorsAdded} from "./actions/errors";

export const App = () => {
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(0.1);

  const [bestAllocation, setBestAllocation] = useState({})
  useEffect(() => {
    fetch(`/api/best-rate`)
      .then(x=>x.json())
      .then(setBestAllocation)
  }, [])

  const [allocations, setAllocations] = useState([])
  useEffect(() => {
    fetch(`/api/allocations?amount=${amount}`)
      .then(async x => {
        if (x.status >= 400) {throw new Error(await x.text())}
        return x
      })
      .then(x=>x.json())
      .then(setAllocations)
      .catch(e => dispatch(errorsAdded(e.message)))
  }, [amount])

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
          <div className="pt-4"><AllocationsTable allocations={allocations}/></div>
        </Card>
      </div>
      <div className="pt-2">
        <Card>
          <p>WAGMI</p>
        </Card>
      </div>
    </>
  );
}
