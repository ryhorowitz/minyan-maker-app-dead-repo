import React, { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import AppContext from './AppContext'
import Login from "./components/Login"
import LogoutButton from './components/LogoutButton'
import Signup from './components/Signup'
import LoginSignupButtonsContainer from './components/LoginSignupButtonsContainer'
import NavBar from './components/NavBar'

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
        <div className='container'>
          <nav className="navbar justify-content-center navbar-expand-lg navbar-light"
            style={{ background: '#e3f2fd' }}>
            <ul className="navbar-nav ml-auto">
              <LoginSignupButtonsContainer />
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/signup' element={<Signup setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />

        </Routes>
      </>
    )
  }
  return (
    <div className="App">
      <div className='container'>
        <nav className="navbar justify-content-center navbar-expand-lg navbar-light"
          style={{ background: '#e3f2fd' }}>
          <ul className="navbar-nav ml-auto">
            {/* <LoginSignupButtonsContainer /> */}
            <NavBar logout={handleLogout} />
            {/* <LogoutButton logout={handleLogout} /> */}
          </ul>
        </nav>
      </div>

      <h2>hello world</h2>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

    </div>
  );
}

export default App;
