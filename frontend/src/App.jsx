import React, {useEffect, useState} from "react";
import s from './App.module.css'

export const App = () => {
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    fetch('/api/greeting')
      .then(x=>x.text())
      .then(JSON.parse)
      .then(x => x.content)
      .then(setGreeting)
  }, [])
  return (
    <div className={s.emphasis}>{greeting}</div>
  );
}
