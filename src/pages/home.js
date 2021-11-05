import React from 'react'
import { Timeline } from 'react-twitter-widgets'

import News from '../components/home/News';
import "../assets/css/css/home.css"

const Home = () => {
  return (
    <>
    <div className="homeContainerWrapper">
      <News />
      <div>
        <Timeline
          dataSource={{
            sourceType: 'FF_XIV_EN',
            screenName: 'FF_XIV_EN'
          }}
          options={{
            height: '1150px',
            width: '100%',
            theme: 'dark'
          }}
        />
      </div>
    </div>
    </>
  )
}

export default Home
