import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import NavigationBar from "./components/navigationbar/NavigationBar"

import Home from "./pages/home"
import Database from "./pages/database"
import PageNotFound from "./pages/404"
import Header from "./components/Header"
import Footer from "./components/Footer"

const XIVDatabase = () => {
  return (
  <div className='container'>
      <BrowserRouter>
        <NavigationBar />
        <Header />
        <div className="mainContent">
          <div className="wrapper">
            <div className="mainContentBox">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/database" component={Database}/>
              <Route exact path="/PageNotFound" component={PageNotFound}/>
              <Redirect to="/PageNotFound"/>
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default XIVDatabase
