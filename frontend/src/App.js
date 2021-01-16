import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import { Provider } from 'react-redux'

import store from './store'
import Dashboard from './components/lead/Dashboard'

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Fragment>
          <Header/>
          <div className="container">
          <Dashboard/>
          </div>
        </Fragment>
      </Provider>
    )
  }
}

