import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from 'react-markdown'

import Moment from 'react-moment';

const NewsPost = ({author, newssum, newstitle,newsimg,newscategory, date, content}) => {
  const { t } = useTranslation();
  const [ contentShow, setContentShow ] = useState(false)

  return (
    <div className="homeNewsPost">
      <div className="homeNewsPostImage" style={{backgroundImage:`url(${newsimg})`, display: contentShow ? "none" : "block"}}><span>{t(`${newscategory}`)}</span></div>
      <div className="homeNewsPostContent">
        <p>{newstitle}</p>
        <div className="homeNewsPostDates"><i className="fas fa-calendar-alt" style={{fontSize:"12px"}}></i> <span>{t("posted")} <span style={{fontWeight:"800"}}><Moment subtract={{ hours: 1 }} format='DD.MM.YYYY - HH:mm'>{date}</Moment></span>{t("from")} <span style={{color:"#eaac16",fontWeight:"800"}}>{author}</span></span></div>
        {contentShow === false &&
        <div className="homeNewsPostDesc">{newssum}</div>
        } {contentShow === true &&
        <div className="homeNewsPostContent"><ReactMarkdown>{content}</ReactMarkdown></div>
        }
        <button onClick={()=> setContentShow(prevCheck => !prevCheck)}>{contentShow ? "Show Less" : "Show More"}</button>
      </div>
  </div>
  )
}

export default NewsPost
