import React from 'react'

import nanamo from "../assets/img/nanamo404.png"

const PageNotFound = () => {
  return (
    <div style={{display:'flex',justifyContent:"center",padding:"50px 0px 100px 0px"}}>
      <img alt="nanamo" src={nanamo} />
      <h1 style={{position:"absolute", bottom:"200px", textTransform:"uppercase", color:"#eaac16",fontSize:"50px"}}>404 Seite nicht gefunden</h1>
    </div>
  )
}

export default PageNotFound
