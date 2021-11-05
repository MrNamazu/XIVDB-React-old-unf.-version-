import React from 'react'
import { Link } from 'react-router-dom';

import HeaderSearchBar from './misc/HeaderSearchBar';

const Header = () => {

  return (
    <div>
      <div id="headerBackground">
        <></>
      </div>
      <div id="header">
        <Link to="/">
          <div id="logo"></div>
        </Link>

        <HeaderSearchBar />

      </div>
    </div>
  )
}

export default Header

