import React, { useState } from 'react'
import { Link } from "react-router-dom"

import UserControlPanelDropDown from "./UserControlPanelDropDown"
import defaultavatar from "../../../assets/img/default_avatar.png"

const UserControlPanel = () => {
  const [dropDown, setDropDown] = useState(false);

  const onMouseEnter = () => {
    setDropDown(true);
  };
  const onMouseLeave = () => {
    setDropDown(false);
  };

  return (



    <div className="mainMenuLoginBar">
      <div className="ucpButtonWrapper">
          <Link to="/Signin"><button className="ucpButtons">Login</button></Link>
          <Link to="/Signup"><button className="ucpButtons">Register</button></Link>
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
