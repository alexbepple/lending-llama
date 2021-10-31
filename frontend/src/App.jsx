import React, {useEffect, useState} from "react";
import s from './App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Card, CircularMinusButton, CircularPlusButton} from "./presentation";
import {CounterCard} from "./CounterCard";

export const App = () => {
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    fetch('/api/')
      .then(x=>x.text())
      .then(setGreeting)
  }, [])

  const [allocation, setAllocation] = useState({})
  useEffect(() => {
    fetch('/api/allocation')
      .then(x=>x.json())
      .then(setAllocation)
  }, [])

  const count = useSelector(x => x.value)
  const dispatch = useDispatch()

  return (
    <>
      <Card>
        <span className={s.emphasis}>{greeting}</span>
      </Card>
      <Card>
        Best rate: {allocation.rate}% ({allocation.name})
      </Card>
      <CounterCard/>
      <Card>
        <span className="mx-3">{count}</span>
        <CircularPlusButton onClick={() => dispatch({type: 'counter/incremented'})}/>
        <CircularMinusButton onClick={() => dispatch({type: 'counter/decremented'})}/>
      </Card>
    </>
  );
}
