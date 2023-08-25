import React, { useState, useContext } from "react"
import AppContext from "../AppContext"
import { useNavigate } from "react-router-dom"

function Signup() {
  const { setUser } = useContext(AppContext)
  const [signupErrors, setSignupErrors] = useState([])
  const [signupFormData, setSignupFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()
  function handleSignupFormData(e) {
    const { name, value } = e.target
    setSignupFormData({ ...signupFormData, [name]: value })
  }

  function handleSignupSubmit(e) {
    e.preventDefault()
    const body = {
      username: signupFormData.username,
      password: signupFormData.password,
      password_confirmation: signupFormData.confirmPassword
    }
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(newUser => {
            console.log('user created successfully', newUser)
            setUser(newUser)
            navigate('/home')
          })
        } else {
          r.json().then(e => {
            console.log('error response', e)
            // console.log('flattening', e.errors.flat())
            setSignupErrors(Object.values(e.errors))
          })
        }
      })
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Signup</h2>
            <form onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="signup-username"
                  className="form-control"
                  name="username"
                  value={signupFormData.username}
                  onChange={handleSignupFormData}
                // required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="signup-password"
                  className="form-control"
                  name="password"
                  value={signupFormData.password}
                  onChange={handleSignupFormData}
                // required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="signup-confirmPassword"
                  className="form-control"
                  name="confirmPassword"
                  value={signupFormData.confirmPassword}
                  onChange={handleSignupFormData}
                // required
                />
              </div>
              {signupErrors.length > 0 && (
                <ul style={{ color: "red" }}>
                  {signupErrors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}
              <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup