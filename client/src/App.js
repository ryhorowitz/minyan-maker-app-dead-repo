import React, { useContext, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import AppContext from './AppContext'
import Login from "./components/Login"
import LogoutButton from './LogoutButton'
import Signup from './components/Signup'

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
      <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <Link to="/login">Login</Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <Link to="/signup">Signup</Link>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/login' element={< Login setUser={setUser} />} />
          <Route path='/signup' element={<Signup setUser={setUser} />} />
        </Routes>
      </>
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
