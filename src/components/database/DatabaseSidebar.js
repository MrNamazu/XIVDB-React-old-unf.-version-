import React from 'react'
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';

const DatabaseSidebar = ({collectable, crest, dyeable, glamour, added}) => {
  const { t } = useTranslation();
  const [ collectDisplay, setcollectDisplay ] = useState([]);
  const [ crestDisplay, setcrestDisplay ] = useState([]);
  const [ glamourDisplay, setglamourDisplay ] = useState([]);
  const [ collectableDisplay, setcollectableDisplay ] = useState([]);

  useEffect(() => {
    switch (dyeable) {
      case 0:
        setcollectDisplay(`${t("no")}`)
        break;
      case 1:
        setcollectDisplay(`${t("yes")}`)
        break;
      default:
        break;
    }
  }, [t, dyeable])

  useEffect(() => {
    switch (crest) {
      case 0:
        setcrestDisplay(`${t("no")}`)
        break;
      case 1:
        setcrestDisplay(`${t("yes")}`)
        break;
      default:
        break;
    }
  }, [t, crest])

  useEffect(() => {
    switch (glamour) {
      case 0:
        setglamourDisplay(`${t("no")}`)
        break;
      case 1:
        setglamourDisplay(`${t("yes")}`)
        break;
      default:
        break;
    }
  }, [t, glamour])

  useEffect(() => {
    switch (collectable) {
      case 0:
        setcollectableDisplay(`${t("no")}`)
        break;
      case 1:
        setcollectableDisplay(`${t("yes")}`)
        break;
      default:
        break;
    }
  }, [t, collectable])
  
  return (
    <div className="databaseContentSidebar">
      <div><span className="databaseContentSidebarInfoTitle"> {t("sellingprice")}: </span>
            <span className="databaseContentSidebarInfoOutcome"> Coming Soon </span>
      </div>
      <div>
        <span className="databaseContentSidebarInfoTitle"> {t('added')}: </span>
        <span className="databaseContentSidebarInfoOutcome"> {added} </span>
      </div>
      <div>
        <span className="databaseContentSidebarInfoTitle"> {t('ribbon')}: </span>
        <span className="databaseContentSidebarInfoOutcome"> {crestDisplay} </span>
      </div>
      <div>
        <span className="databaseContentSidebarInfoTitle"> {t('dyeable')}: </span>
        <span className="databaseContentSidebarInfoOutcome"> {collectDisplay} </span>
      </div>
      <div>
        <span className="databaseContentSidebarInfoTitle"> {t('projection')}: </span>
        <span className="databaseContentSidebarInfoOutcome"> {glamourDisplay} </span>
      </div>
      <div>
        <span className="databaseContentSidebarInfoTitle"> {t('armoire')}: </span>
        <span className="databaseContentSidebarInfoOutcome"> {collectableDisplay} </span>
      </div>
    </div>
  )
}

export default DatabaseSidebar
