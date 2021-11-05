import React from 'react'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'

const DatabaseItemName = ({namede, nameen, namefr, nameja}) => {
  const { i18n } = useTranslation();
  const [Item, setItem] = useState([""]);
  
  useEffect(() => {
    switch (i18n.language) {
      case 'en':
        setItem(nameen)
        break;
      case 'de':
        setItem(namede)
        break;
      case 'fr':
        setItem(namefr)
        break;
      case 'ja':
        setItem(nameja)
        break;
      default:
        break;
    }
  }, [i18n.language, Item, namede, nameen, nameja, namefr])

  return (
    <>
      <div className="databaseContentTitle">
        <span>
          {Item}
        </span>
      </div>
    </>
  )
}

export default DatabaseItemName
