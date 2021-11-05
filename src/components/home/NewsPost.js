import React from 'react'


const NewsPost = ({author, newssum, newstitle,newsimg}) => {
  return (
    <div className="homeNewsPost">
      <div className="homeNewsPostImage" style={{backgroundImage:`url(${newsimg})`}}></div>
      <div className="homeNewsPostContent">
        <p>{newstitle}</p>
        <div className="homeNewsPostDates"><span>Gepostet am <span style={{fontWeight:"800"}}>05.11.21</span> um <span style={{fontWeight:"800"}}>03:16</span> Uhr von <span style={{color:"#eaac16",fontWeight:"800"}}>{author}</span></span></div>
        <div className="homeNewsPostDesc">{newssum}</div>
        <button>Mehr erfahren</button>
      </div>
  </div>
  )
}

export default NewsPost
