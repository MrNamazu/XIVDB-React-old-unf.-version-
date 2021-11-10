import { React, useState, useEffect } from "react";
import { Timeline } from 'react-twitter-widgets'
import { useTranslation } from "react-i18next";

import News from '../components/home/News';
import "../assets/css/css/home.css"



const Home = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState(null)

  useEffect(() => {
    const query = `
    {
      newsCollection(locale: "${t('lng2')}") {
        items {
          title
          author
          published
          newsSummary
          newscontent
          category
          titleimage {
            url
          }
        }
      }
    }
    `
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/awqpfsl6936e/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer vssdG69CD8Xc1GNWkvo611ZBqtwQ0h2OaKhDR4_fiqs`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setNews(data.newsCollection.items);
      });
  }, [t]);




  return (
    <>
      <div className="homeContainerWrapper">
        <div>

          <News items={news} />
        </div>
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
