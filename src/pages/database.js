import { Switch, Route } from "react-router-dom"

import DatabaseContent from '../components/database/DatabaseContent'; 
import Searchbar from '../components/database/DatabaseSearchbar';

import '../assets/css/css/database.css';

const Database = () => {
  return (
    <div className="databaseContentWrapper">
      <div className="databaseSearchBarContainer">
        <Searchbar />
      </div>
      <div className="databaseContentContainer">        
        <Switch>
          <Route path="/database/:name/:id" component={DatabaseContent} />
        </Switch>
      </div>
    </div>
  )
}

export default Database
