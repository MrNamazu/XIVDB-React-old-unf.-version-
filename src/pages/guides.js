import React from 'react'

import "../assets/css/css/guide.css"

const guides = () => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className="guideClassCard">
        <div className="paladin"></div>
        <p>Paladin</p>
      </div>
      <div className="guideClassCard">
        <div className="paladin"></div>
        <p>Warrior</p>
      </div>
      <div className="guideClassCard">
        <div className="paladin"></div>
        <p>Dark Knight</p>
      </div>
      <div className="guideClassCard">
        <div className="paladin"></div>
        <p>Gunbreaker</p>
      </div>
    </div>
  )
}

export default guides
