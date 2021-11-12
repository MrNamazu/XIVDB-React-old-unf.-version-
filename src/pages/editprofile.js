import React, { useState } from 'react'
import { useTabs, TabPanel } from "react-headless-tabs"

import "../assets/css/css/profilesettings.css"


const Editprofile = () => {
  const [showTutorial, setShowTutorial] = useState(false)
  const [selectedTab, setSelectedTab] = useTabs([
    'account',
    'xivsync',
  ]);

  return (
    <div className="profileSettingContainer">
      <nav className="profileTabMenu">
        <TabPanel className="" isActive={selectedTab === 'account'} onClick={() => setSelectedTab('account')}>My Account</TabPanel>
        <TabPanel isActive={selectedTab === 'xivsync'} onClick={() => setSelectedTab('xivsync')}>FFXIV Sync</TabPanel>
      </nav>
      <div className="profileTabMenuContent">
        <TabPanel hidden={selectedTab !== 'account'}>My Account</TabPanel>
        <TabPanel hidden={selectedTab !== 'xivsync'}>xivsync</TabPanel>
      </div>
    </div>
  )
}

export default Editprofile
