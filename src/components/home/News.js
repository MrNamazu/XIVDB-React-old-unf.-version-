import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import NewsPost from './NewsPost' 



const News = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(null);


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
          titleimage {
            url
          }
          contentfulMetadata {
            tags {
              id
            }
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
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setPage(data.newsCollection.items);
      });
  }, [t]);
    

  const newsblogs = []
  for (let i in page) {
    newsblogs.push(<NewsPost key={i} author={page[i].author} newssum={page[i].newsSummary} newstitle={page[i].title} newsimg={page[i].titleimage.url} />)
  }

  if (!page) {
    return "Loading...";
  }

  return (
  <div>
    <div className="homeNewsSortBar">
      <span>Sort News:</span>
      <span><Link to="#"><button><i className="far fa-newspaper"></i> News</button></Link></span>
      <span><Link to="#"><button><i className="fas fa-upload"></i> Updates</button></Link></span>
      <span><Link to="#"><button><i className="fas fa-calendar-alt"></i> Events</button></Link></span>
      <span><Link to="#"><button><i className="fas fa-list"></i> Patch Notes</button></Link></span>
    </div>
    {newsblogs}
    <Link to="/" className="homeNewsLoadMoreNews"><button>Mehr Laden</button></Link>
  </div>
  )
}

export default News
