import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{display:'flex',justifyContent:"center", margin:"20px", alignItems:"center", color:"grey", fontSize:"12px"}}>
      <span style={{marginRight:"10px"}}>App created by MrNamazu - Shiva(Light)</span>
      <i style={{marginRight:"10px"}} className="fas fa-grip-lines-vertical"></i>
      <Link to="/impress" style={{marginRight:"10px",color:"#eaac16",fontWeight:"600",textDecoration:"none"}}>Impress</Link>
      <i style={{marginRight:"10px"}} className="fas fa-grip-lines-vertical"></i>
      <Link to="/about" style={{color:"#eaac16",fontWeight:"600",textDecoration:"none"}}>About</Link>
    </div>
  )
}

export default Footer
