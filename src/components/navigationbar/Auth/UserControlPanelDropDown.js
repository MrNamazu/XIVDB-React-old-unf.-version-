import React from "react"
import { useAuth } from './Context/AuthContext'
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';

const UserControlPanelDropDown = () => {
  const { logout } = useAuth()

  async function handleLogout() {
    try {
      await logout()
      toast.success('Du hast dich erfolgreich ausgeloggt!', {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    } catch {
      toast.error('Logout fehlgeschlagen', {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      })
    }
  }
  return (
    <div className="ucpDropDown">
      <Link to="/listsettings"><i class="fas fa-stream"></i> Craftinglisten</Link>
      <Link to="/editprofile"><i className="fas fa-cogs"></i> Profil Einstellungen</Link>
      <Link to="#" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Abmelden</Link>
    </div>
  )
}

export default UserControlPanelDropDown
