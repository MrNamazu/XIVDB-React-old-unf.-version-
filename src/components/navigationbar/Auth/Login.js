import React from 'react'

import "../../../assets/css/css/login-register.css"

const Login = ({openModal}) => {

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

          <p className="Error">Error</p>
          <p className="Success">Success</p>
          <p className="Warning">Warning</p>
          
          <div className="form-group">
            <label>E-mail:</label> 
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              placeholder="user@xivdb.org"
            />
          </div>
          <div className="form-group">
            <label>Password:</label> 
            <input 
                type="password" 
                className="form-control" 
                name="password" 
                placeholder="*****************" 
                required="required" 
              />
          </div>
          <div class="form-checkbox">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Stay Logged in!</label>
          </div>
          <div className="form-group">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
