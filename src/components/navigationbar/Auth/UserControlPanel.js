import React, { useState } from 'react'
import { useAuth } from './Context/AuthContext'

import UserControlPanelDropDown from "./UserControlPanelDropDown"
import defaultavatar from "../../../assets/img/default_avatar.png"
import Login from './Login'
import Register from './Register'
import Craftinglistsidebar from "../../craftinglist/Craftinglistsidebar"

const UserControlPanel = () => {
  const [dropDown, setDropDown] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openCraftingList, setOpenCraftingList] = useState(false);
  const { currentUser } = useAuth()

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


      { currentUser?.email === undefined &&
        <div className="ucpButtonWrapper">
          <button onClick={OpenLogin} className="ucpButtons">Login</button>
          {openLogin && <Login openModal={setOpenLogin} />}
          <button onClick={OpenRegister} className="ucpButtons">Register</button>
          {openRegister && <Register openModalR={setOpenRegister} />}
        </div>
      }

      { currentUser?.email !== undefined &&
      <>
        <div className="ucpCraftingListIcon" onClick={()=> setOpenCraftingList(prevCheck => !prevCheck)}><i className="fas fa-tools"></i></div>
        {openCraftingList && <Craftinglistsidebar />}

        <div className="ucpCharacter"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="ucpCharacterName">
              <div>
                <span>Eingeloggt als</span>
                <span className="ucpCharacterNamePlate">&nbsp;{currentUser?.email}</span>
              </div>
              {dropDown && <UserControlPanelDropDown />}
            </div>
            <div className="ucpCharacterAvatar">
              <img alt="" src={defaultavatar} />
            </div>
        </div> 
      </>
      }
    </div>
    
  )
}

export default UserControlPanel
