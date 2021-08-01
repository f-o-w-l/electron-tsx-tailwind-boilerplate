import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.global.css'

import AppContainer from './components/AppContainer'

import './constants/setupDotEnv'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppContainer} />
      </Switch>
    </Router>
  )
}
