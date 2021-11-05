import React from 'react'
import { useTranslation } from 'react-i18next'

const DatabaseStatMat = ({stats}) => {
  const { t } = useTranslation();



  const subStats = Object.keys(stats).map((key) => {
    return(
      <div key={key} className="databaseAccourdeonStats">
        <span className="dataBaseAccourdeonStatTitle">{t(`${key.toLowerCase()}`)}:</span>
        <span className="dataBaseAccourdeonStatCount">{stats[key].NQ}</span>
        
        {(() => {
          if (stats[key].HQ !== undefined) {
            return <span className="dataBaseAccourdeonStatHQ"> (+{stats[key].HQ - stats[key].NQ})</span>
          }     
        })()}
        
      </div>
    )})
  
  return (
    <>
      <div className="databaseAccordeonMenu">
        <button className="databaseAccordeonMenuTitle">{t("stats")}</button>
        <div className="databaseAccordeonMenuContent">
          {subStats}
        </div>
      </div>
    </>
  )
}

export default DatabaseStatMat
