import React, { useState } from "react"
import { useAuth } from './Context/AuthContext'
import { Link } from "react-router-dom"

const UserControlPanelDropDown = () => {
  const [error, setError] = useState("")
  const { logout } = useAuth()

  async function handleLogout() {
    setError("")
    try {
      await logout()
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <div className="ucpDropDown">
      <Link to="#"><i className="fas fa-edit"></i> Profil bearbeiten</Link>
      <Link to="#"><i className="fas fa-cogs"></i> Einstellungen</Link>
      <Link to="#" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Abmelden</Link>
      {error && <div className="Error" variant="danger">{error}</div>}
    </div>
  )
}

export default UserControlPanelDropDown
