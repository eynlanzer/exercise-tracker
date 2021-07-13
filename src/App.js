import React from 'react'
import './styles/index.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

// COMPONENTS
import Header from './components/Header'
import Login from './components/Login'
import Menu from './components/Menu'

// CONTAINERS
import Home from './containers/Home'
import Predition from './containers/Prediction'
import Summary from './containers/Summary'

export default function App() {
  return (
    <Router>
      <div className='row'>
        <div className='column'>
          <Header/>
          <Switch>
            <Route exact={true} path="/">
              <Home/>
            </Route>
            <Route exact={true} path="/predicoes">
              <Predition/>
            </Route>
            <Route exact={true} path="/resumos">
              <Summary/>
            </Route>
          </Switch>
        </div>
        <Login />
        <Menu />
      </div>
    </Router>
  );
}

