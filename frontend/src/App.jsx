import React, {useEffect, useState} from "react";
import s from './App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Card, CircularMinusButton, CircularPlusButton} from "./presentation";

export const App = () => {
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    fetch('/api/greeting')
      .then(x=>x.text())
      .then(JSON.parse)
      .then(x => x.content)
      .then(setGreeting)
  }, [])

  const count = useSelector(x => x.value)
  const dispatch = useDispatch()

  return (
    <>
      <Card>
        <span className={s.emphasis}>{greeting}</span>
      </Card>
      <Card>
        {count}
        <CircularPlusButton onClick={() => dispatch({type: 'counter/incremented'})}/>
        <CircularMinusButton onClick={() => dispatch({type: 'counter/decremented'})}/>
      </Card>
    </>
  );
}
