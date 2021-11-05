import React from 'react'
import { useTranslation } from 'react-i18next'

const DatabaseReqirements = ({classjob, levelreq}) => {
  const { t } = useTranslation();


  function classSigns() {
    if (classjob?.ID === 1) {
      return (<span className="databaseJobRibbon">{t("allclass")}</span>)
    } else if (classjob?.ID === 30) {
      return(<span className="databaseJobRibbon">{t("dow")}</span>)
    } else if (classjob?.ID === 31) {
      return(<span className="databaseJobRibbon">{t("dom")}</span>)
    } else if (classjob?.ID === 32) {
      return(<span className="databaseJobRibbon">{t("dol")}</span>)
    } else if (classjob?.ID === 33) {
      return(<span className="databaseJobRibbon">{t("doh")}</span>)
    } else {
      const keyname = Object.entries(classjob).filter(([key, value]) => value === 1).map(([key, value]) => key.toLowerCase());
      return keyname.map((Results, i) => {
        return (
          <span key={i} className="databaseJobRibbon">{t(`${Results}`)}</span>
        )
      })
    } 
  }

  return (
    <>
      <div className="databaseJob">
        <span className="databaseJobTitle">{t("job")}:</span>
        {classSigns()}
      </div>
      <div className="databaseLevelReq">
        <span className="databaseLevelReqTitle">{t("lvlreqtext")}:</span>
        <span className="databaseLevelReqNumber">{levelreq}</span>
      </div>
    </>
  )
}

export default DatabaseReqirements
