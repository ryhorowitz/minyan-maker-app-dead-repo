import React, { useContext, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import AppContext from './AppContext'
import Login from "./components/Login"
import LogoutButton from './LogoutButton'
function App() {
  const { user, setUser } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/auth')
      .then(res => {
        if (res.ok) {
          res.json().then(user => setUser(user))
        }
      })
      .catch(e => console.error('error is', e))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleLogout() {
    fetch('/logout', { method: 'DELETE' })
      .then(() => setUser(null))
      .then(() => navigate('/login'))
  }
  if (!user) {
    return (
      < Login setUser={setUser} />
    )
  }
  return (
    <div className="App">
      <h2>hello world</h2>
      <LogoutButton logout={handleLogout} />
    </div>
  );
}

export default App;
