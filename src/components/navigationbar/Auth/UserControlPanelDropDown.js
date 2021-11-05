import React from 'react'
import { Link } from "react-router-dom"

const UserControlPanelDropDown = () => {
  return (
    <div className="ucpDropDown">
      <Link to="#"><i className="fas fa-edit"></i> Profil bearbeiten</Link>
      <Link to="#"><i className="fas fa-cogs"></i> Einstellungen</Link>
      <Link to="#"><i className="fas fa-sign-out-alt"></i> Abmelden</Link>
    </div>
  )
}

export default UserControlPanelDropDown
