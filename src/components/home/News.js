import { React, useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import NewsPost from './NewsPost'

/* const allCategories = ['All', 'xivUpdates', 'xivNews', 'ffUpdates', 'ffEvent', 'ffNews']; */

const News = ({ items }) => {
  const [visible, setVisible] = useState(5)
  const [menuitem, setMenuItem] = useState(items);
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    setMenuItem(items)
    if (filter === "All") {
      setMenuItem(items)
    } else if (filter === "FFXIVNews"){
      const filteredData = items.filter(item => item.category === "FFXIVNews");
      setMenuItem(filteredData)
    } else if (filter === "FFXIVUpdates"){
      const filteredData = items.filter(item => item.category === "FFXIVUpdates");
      setMenuItem(filteredData)
    } else if (filter === "FFXIVEvents"){
      const filteredData = items.filter(item => item.category === "FFXIVEvents");
      setMenuItem(filteredData)
    } else if (filter === "XIVDBNews"){
      const filteredData = items.filter(item => item.category === "XIVDBNews");
      setMenuItem(filteredData)
    } else if (filter === "XIVDBUpdates"){
      const filteredData = items.filter(item => item.category === "XIVDBUpdates");
      setMenuItem(filteredData)
    }
  }, [items, setMenuItem, filter]);


  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 5)
  }

  return (
    <>
      <div className="homeNewsSortBar">
        <span>Sort News:</span>
        <span><Link to="#"><button type="button" onClick={()=> setFilter("All")}><i className="fas fa-fire"></i> All</button></Link></span>
        <span><Link to="#"><button type="button" onClick={()=> setFilter("FFXIVNews")}><i className="far fa-newspaper"></i> News</button></Link></span>
        <span><Link to="#"><button type="button" onClick={()=> setFilter("FFXIVUpdates")}><i className="fas fa-upload"></i> Updates</button></Link></span>
        <span><Link to="#"><button type="button" onClick={()=> setFilter("FFXIVEvents")}><i className="fas fa-calendar-alt"></i> Events</button></Link></span>
        <span><Link to="#"><button type="button" onClick={()=> setFilter("XIVDBNews")}><i className="fas fa-list"></i> XIVDB News</button></Link></span>
        <span><Link to="#"><button type="button" onClick={()=> setFilter("XIVDBUpdates")}><i className="fas fa-list"></i> XIVDB Updates</button></Link></span>
      </div>
      {menuitem?.slice(0, visible).map((item, i) => (
        <NewsPost
          key={i}
          author={item.author}
          newssum={item.newsSummary}
          newstitle={item.title}
          newsimg={item.titleimage?.url}
          newscategory={item.category}
          date={item.published}
          content={item.newscontent}
        />
      ))}
      <Link to="#" className="homeNewsLoadMoreNews" onClick={showMoreItems}><button>Mehr Laden</button></Link>
    </>
  )
}

export default News
