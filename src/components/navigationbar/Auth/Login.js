import React, { useRef, useState } from "react"
import { useAuth } from "./Context/AuthContext"

import "../../../assets/css/css/login-register.css"

const Login = ({ openModal }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)



  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setSuccess("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      document.body.style.overflow = 'unset';
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  const CloseLogin = () => {
    openModal(false)
    document.body.style.overflow = 'unset';
  }

  return (
    <div className="LoginModal">
      <div className="LoginModalBG" onClick={CloseLogin}></div>
      <div className="LoginWindow">
        <button onClick={CloseLogin}><i class="fas fa-times"></i></button>
        <div className="LoginForm">
          <h1>Login</h1>

          {success && <p className="Success">{success}</p>}
          {error && <p className="Error">{error}</p>}

            <div className="form-group">
              <label>E-mail :</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="user@xivdb.org"
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label>Password :</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="*****************"
                required="required"
                ref={passwordRef}
              />
            </div>

            <div class="form-checkbox">
              <input type="checkbox" id="checkbox1" />
              <label for="checkbox1">Stay Logged in</label>
            </div>

            <div className="form-group">
              <button disabled={loading} onClick={handleSubmit}>Login</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Login
