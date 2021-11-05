import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import NewsPost from './NewsPost'

const query = `
{
  newsCollection {
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

const News = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
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
  }, []);

  if (!page) {
    return "Loading...";
  }

  const author = page[1].author
  const newssum = page[1].newsSummary
  const newstitle = page[1].title
  const newsimg = page[1].titleimage.url

  console.log(page)
  

  return (
  <div>
    <div className="homeNewsSortBar">
      <span>Sort News:</span>
      <span><Link to="#"><button><i className="far fa-newspaper"></i> News</button></Link></span>
      <span><Link to="#"><button><i className="fas fa-upload"></i> Updates</button></Link></span>
      <span><Link to="#"><button><i className="fas fa-calendar-alt"></i> Events</button></Link></span>
      <span><Link to="#"><button><i className="fas fa-list"></i> Patch Notes</button></Link></span>
    </div>
    <NewsPost author={author} newssum={newssum} newstitle={newstitle} newsimg={newsimg} />
    <Link to="/" className="homeNewsLoadMoreNews"><button>Mehr Laden</button></Link>
  </div>
  )
}

export default News
