import React, { useState } from 'react'
import { Link } from "react-router-dom"
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "../../../node_modules/flag-icon-css/css/flag-icons.min.css"

const Navigation = () => {
  const { t } = useTranslation();
  const [lngdrop, setLngdrop] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1250) {
      setLngdrop(false);
    } else {
      setLngdrop(true);
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 1250) {
      setLngdrop(false);
    } else {
      setLngdrop(false);
    }
  }

  return (
    <>
      <ul className="nav-menu">
        <li className="nav-Item">
          <Link to="/">{t("home")}</Link>
        </li>
        <li className="nav-Item">
          <Link to="/database">{t("database")}</Link>
        </li>
        <li className="nav-Item">
          <Link to="/guides">{t("guides")}</Link>
        </li>
        <li className="nav-lng" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <span><i className="fas fa-globe-americas" style={{marginRight:"5px"}}></i><i className="fas fa-caret-down"></i></span>
          {lngdrop && 
          <ul>
            <li onClick={() => i18next.changeLanguage("de")}><i className="flag-icon flag-icon-de"/></li>
            <li onClick={() => i18next.changeLanguage("en")}><i className="flag-icon flag-icon-gb"/></li>
          </ul>
          }
        </li>
      </ul>
      <div>

      </div>
    </>
  )
}

export default Navigation
