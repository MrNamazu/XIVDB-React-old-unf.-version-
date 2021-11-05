import React from 'react'
import { Link } from 'react-router-dom';


const DatabaseSearchbarItem = ({ Results, i }) => {

  return (
    <li key={i + "b"}>
      <Link key={Results.Url} to={`/database${Results.Url}`}>
        <div key={Results.Icon} className="databaseSearchResultIcon"><img alt={Results.Name} src={`https://xivapi.com${Results.Icon}` } /></div>
        <span key={Results.Name} className="databaseSearchResultTitle">{Results.Name}</span>
        <span key={Results.UrlType} className="databaseSearchResultType">{Results.UrlType}</span>
        <button key={i + "a"} disabled><i className="fas fa-plus-square"></i></button>
      </Link>
    </li>
  )
}

export default DatabaseSearchbarItem
