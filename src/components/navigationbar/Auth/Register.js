import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import { useAuth } from "./Context/AuthContext"

const Register = ({ openModalR }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [Success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const delay = ms => new Promise(res => setTimeout(res, ms));

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      setSuccess("Erfolgreich Regestriert! Bitte warte einen Moment")
      await delay(2000);
      history.push("/")
      openModalR(false)
      document.body.style.overflow = 'unset';
    } catch {
      setError("Failed to create an Account")
    }
    setLoading(false)
  }


  const CloseRegister = () => {
    openModalR(false)
    document.body.style.overflow = 'unset';
  }


  return (
    <div className="LoginModal">
      <div className="LoginModalBG" onClick={CloseRegister}></div>
      <div className="LoginWindow">
        <button onClick={CloseRegister}><i className="fas fa-times"></i></button>
        <div className="LoginForm">
          <h1>Register</h1>

          {Success && <p className="Success">{Success}</p>}
          {error && <p className="Error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>E-mail*:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="user@xivdb.org"
                required="required"
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label>Password* :</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="*****************"
                required="required"
                ref={passwordRef}
              />
            </div>
            <div className="form-group">
              <label>Password Confirmation*:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="*****************"
                required="required"
                ref={passwordConfirmRef}
              />
            </div>
            <div className="form-checkbox">
              <input type="checkbox" required id="checkbox1" />
              <label htmlFor="checkbox1">Accept Terms of Service*</label>
            </div>
            <div className="form-group">
              <button disabled={loading} type="submit">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
