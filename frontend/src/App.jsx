import React, {useEffect, useState} from "react";
import s from './App.module.css'
import {useDispatch, useSelector} from "react-redux";

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
      <div className={s.emphasis}>{greeting}</div>
      <div>
        {count}
        <button onClick={() => dispatch({ type: 'counter/incremented' })}>+</button>
        <button onClick={() => dispatch({ type: 'counter/decremented' })}>-</button>
      </div>
    </>
  );
}
