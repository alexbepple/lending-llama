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
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <span className={s.emphasis}>{greeting}</span>
        </div>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {count}
          <button onClick={() => dispatch({ type: 'counter/incremented' })}>+</button>
          <button onClick={() => dispatch({ type: 'counter/decremented' })}>-</button>
        </div>
      </div>
    </>
  );
}
