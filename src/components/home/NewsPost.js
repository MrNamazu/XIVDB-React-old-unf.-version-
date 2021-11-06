import React from 'react'
import { useTranslation } from "react-i18next";

import Moment from 'react-moment';

const NewsPost = ({author, newssum, newstitle,newsimg,newscategory, date}) => {
  const { t } = useTranslation();
  return (
    <div className="homeNewsPost">
      <div className="homeNewsPostImage" style={{backgroundImage:`url(${newsimg})`}}><span>{t(`${newscategory}`)}</span></div>
      <div className="homeNewsPostContent">
        <p>{newstitle}</p>
        <div className="homeNewsPostDates"><span>Gepostet: <span style={{fontWeight:"800"}}><Moment format='DD.MM.YYYY'>{date}</Moment></span>von <span style={{color:"#eaac16",fontWeight:"800"}}>{author}</span></span></div>
        <div className="homeNewsPostDesc">{newssum}</div>
        <button>Mehr erfahren</button>
      </div>
  </div>
  )
}

export default NewsPost
