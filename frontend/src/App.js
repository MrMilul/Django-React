import React, { Component, Fragment } from 'react'
import Header from './components/Header'

import Dashboard from './lead/Dashboard'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <div className="container">
         <Dashboard/>
        </div>
      </Fragment>
    )
  }
}

