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
          Authorization: `Bearer vssdG69CD8Xc1GNWkvo611ZBqtwQ0h2OaKhDR4_fiqs`,
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
    

  const newsblocks = []
  for (let i in page) {
    newsblocks.push(
        <NewsPost 
          key={i} 
          author={page[i].author} 
          newssum={page[i].newsSummary} 
          newstitle={page[i].title} 
          newsimg={page[i].titleimage?.url} 
          newscategory={page[i].contentfulMetadata?.tags[0].id}
          date={page[i].published} 
        />
      )
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
    {newsblocks}
    <Link to="/" className="homeNewsLoadMoreNews"><button>Mehr Laden</button></Link>
  </div>
  )
}

export default News
