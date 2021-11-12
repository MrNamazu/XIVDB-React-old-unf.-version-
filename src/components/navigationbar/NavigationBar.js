import React from 'react'

import Navigation from './Navigation';
import UserControlPanel from './Auth/UserControlPanel';

import '../../assets/css/css/navigation.css';

const NavigationBar = () => {
  return (
    <nav className="Navigation">
      <div className='wrapper'>
        <Navigation />
        <UserControlPanel />
      </div>
		</nav>
  )
}

export default NavigationBar
