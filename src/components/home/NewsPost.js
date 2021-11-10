import React from 'react'
import { useTranslation } from "react-i18next";

import Moment from 'react-moment';

const NewsPost = ({author, newssum, newstitle,newsimg,newscategory, date, link}) => {
  const { t } = useTranslation();
  return (
    <div className="homeNewsPost">
      <div className="homeNewsPostImage" style={{backgroundImage:`url(${newsimg})`}}><span>{t(`${newscategory}`)}</span></div>
      <div className="homeNewsPostContent">
        <p>{newstitle}</p>
        <div className="homeNewsPostDates"><i className="fas fa-calendar-alt" style={{fontSize:"12px"}}></i> <span>{t("posted")} <span style={{fontWeight:"800"}}><Moment subtract={{ hours: 1 }} format='DD.MM.YYYY - HH:mm'>{date}</Moment></span>{t("from")} <span style={{color:"#eaac16",fontWeight:"800"}}>{author}</span></span></div>
        <div className="homeNewsPostDesc">{newssum}</div>
        <button>{t("readmore")}</button>
      </div>
  </div>
  )
}

export default NewsPost
