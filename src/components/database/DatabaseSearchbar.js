import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useTranslation } from "react-i18next";

import DatabaseSearchbarItem from './DatabaseSearchbarItem';

const DatabaseSearchbar = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://xivapi.com/search?indexes=item,quest&exclude_dated=1&language=${t('lng')}&string=${input}`)
        setItems(result.data)
        setSearchInfo(result.data.Pagination)
    }
    fetchItems()
  }, [input, t])

  const onChange = (q) => {
    setInput(q)
  }

  return (
    <div className="databaseSearchContainer">
        <input 
          id="databaseSearchBarContent" 
          type="text"
          placeholder="Search for Items, Quests, Guides, etc." 
          value={input}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={e => {if (e.key === 'Enter') e.preventDefault()}}
          autoFocus
          autoComplete="off"
        />
        
      {(searchInfo.ResultsTotal) ? '' : <p className="databaseSearchResultError">{t("noresults")}</p>}
      <ul className="databaseSearchBarResultList">
        {items.Results?.map((Results, i) => {
          return (
            <DatabaseSearchbarItem Results={Results} key={i} i={i}/>
          )
        })}
      </ul>
    </div>
  )
}

export default DatabaseSearchbar
