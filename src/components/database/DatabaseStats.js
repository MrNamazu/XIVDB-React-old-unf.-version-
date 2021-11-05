import { useTranslation } from "react-i18next";
import React from 'react'

const DatabaseStats = ({physdmg, magdmg, magdef, physdef, delay}) => {
  const { t } = useTranslation();

  function mainStats() {
    if (physdmg && magdmg !== 0) {
      if (physdmg > magdmg) {
        const physautoattack = physdmg*delay/3000
        return(
          <>
            <div className="databaseContentStats1">
              <span className="databaseContentStats1_1">{t("physicdmg")}</span>
              <span className="databaseContentStats1_2">{physdmg}</span>
            </div>
            <div className="databaseContentStats1">
              <span className="databaseContentStats1_1">{t("autoatk")}</span>
              <span className="databaseContentStats1_2">{physautoattack.toFixed(2)}</span>
            </div>
            <div className="databaseContentStats1">
              <span className="databaseContentStats1_1">{t("delay")}</span>
              <span className="databaseContentStats1_2">{delay/1000}</span>
            </div>
          </>
        )
      }
      else if (physdmg < magdmg) {
        const magautoattack = physdmg*delay/3000
        return(
          <>
            <div className="databaseContentStats1">
              <span className="databaseContentStats1_1">{t("magicdmg")}</span>
              <span className="databaseContentStats1_2">{magdmg}</span>
            </div>
            <div className="databaseContentStats1">
              <span className="databaseContentStats1_1">{t("autoatk")}</span>
              <span className="databaseContentStats1_2">{magautoattack.toFixed(2)}</span>
            </div>
            <div className="databaseContentStats1">
              <span className="databaseContentStats1_1">{t("delay")}</span>
              <span className="databaseContentStats1_2">{delay/1000}</span>
            </div>
          </>
        )
      }
    }
    else if (physdef || magdef !== 0) {
      return(
        <>
          <div className="databaseContentStats1">
            <span className="databaseContentStats1_1">{t("magicarm")}</span>
            <span className="databaseContentStats1_2">{magdef}</span>
          </div>
          <div className="databaseContentStats1">
            <span className="databaseContentStats1_1">{t("physicarm")}</span>
            <span className="databaseContentStats1_2">{physdef}</span>
          </div>
        </>
      )
    }
  }



  return (
    <div className="databaseContentStats">
      {mainStats()}
    </div>
  )
}

export default DatabaseStats
