import React from 'react'

const Register = ({openModalR}) => {

  const CloseRegister = () => {
    openModalR(false)
    document.body.style.overflow = 'unset';
  }
  
  return (
    <div className="LoginModal">
      <div className="LoginModalBG" onClick={CloseRegister}></div>
      <div className="LoginWindow">
        <button onClick={CloseRegister}><i class="fas fa-times"></i></button>
        <div className="LoginForm">
          <h1>Register</h1>

          <p className="Error">Error</p>
          <p className="Success">Success</p>
          <p className="Warning">Warning</p>

          <div className="form-group">
            <label>E-mail*:</label> 
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              placeholder="user@xivdb.org"
            />
          </div>
          <div className="form-group">
            <label>Password*:</label> 
            <input 
                type="password" 
                className="form-control" 
                name="password" 
                placeholder="*****************" 
                required="required" 
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
              />
          </div>
          <div class="form-checkbox">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Accept Terms of Service</label>
          </div>
          <div className="form-group">
            <button>Signup</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
