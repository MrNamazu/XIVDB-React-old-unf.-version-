import React, { useState } from 'react'

import UserControlPanelDropDown from "./UserControlPanelDropDown"
import defaultavatar from "../../../assets/img/default_avatar.png"
import Login from './Login'
import Register from './Register'

const UserControlPanel = () => {
  const [dropDown, setDropDown] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const OpenLogin = () => {
    setOpenLogin(true)
    document.body.style.overflow = 'hidden';
  }
  const OpenRegister = () => {
    setOpenRegister(true)
    document.body.style.overflow = 'hidden';
  }

  const onMouseEnter = () => {
    setDropDown(true);
  };
  const onMouseLeave = () => {
    setDropDown(false);
  };

  return (
    <div className="mainMenuLoginBar">
      <div className="ucpButtonWrapper">
          <button onClick={OpenLogin} className="ucpButtons">Login</button>
          {openLogin && <Login openModal={setOpenLogin} />}
          <button onClick={OpenRegister} className="ucpButtons">Register</button>
          {openRegister && <Register openModalR={setOpenRegister} />}
      </div>

      
      <div className="ucpCharacter"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <div className="ucpCharacterName">
            <div>
              <span>Eingeloggt als</span>
              <span className="ucpCharacterNamePlate">&nbsp;mail</span>
            </div>
            {dropDown && <UserControlPanelDropDown />}
          </div>
          <div className="ucpCharacterAvatar">
            <img alt="" src={defaultavatar} />
          </div>
      </div> 
    </div>
  )
}

export default UserControlPanel
