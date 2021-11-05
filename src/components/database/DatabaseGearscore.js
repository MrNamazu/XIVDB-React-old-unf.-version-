import React from 'react'
import { useTranslation } from "react-i18next";

const DatabaseGearscore = ({gearscore}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="databaseContentGearscore">
        <span className="databaseContentGearscoreTitle">{t("gearscore")}: </span>
        <span className="databaseContentGearscoreScore"> {gearscore}</span>
      </div>
    </>
  )
}

export default DatabaseGearscore
