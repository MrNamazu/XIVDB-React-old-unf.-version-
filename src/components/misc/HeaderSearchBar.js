import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import DatabaseSearchbarItem from '../database/DatabaseSearchbarItem';

const HeaderSearchBar = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState();
  const [items, setItems] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://xivapi.com/search?indexes=item,quest&exclude_dated=1&language=${t('lng')}&string=${input}`)
        setItems(result.data)
    }
    fetchItems()
  }, [input, t])

  const onChange = (q) => {
    setInput(q)
  }
  const delay = ms => new Promise(res => setTimeout(res, ms));


  const onMouseEnter = () => {
    setDropDown(true);
  };
  const onMouseLeave = async () => {
    await delay(300);
    setDropDown(false);
  };


  if (location.pathname.match(/database/)){
    return null;
  }


  return (
    <>
      <input 
          onFocus={onMouseEnter} onBlur={onMouseLeave}
          id="search-bar" 
          type="text"
          placeholder="Search for Items, Quests, Guides, etc." 
          value={input}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={e => {if (e.key === 'Enter') e.preventDefault()}}
          autoComplete="off"
        />
        <Link to="/"></Link>
        {dropDown &&
          <div className="headerSearchBarContainer" >
            
            <ul>
              {items.Results?.map((Results, i) => {
                return (
                  <DatabaseSearchbarItem Results={Results} key={i} i={i}/>
                )
              })}
            </ul>
                  
          </div>
        } 
    </>
    )
}


export default HeaderSearchBar
