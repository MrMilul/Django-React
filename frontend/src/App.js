import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import { Provider } from 'react-redux'
import {Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import store from './store'
import Dashboard from './components/lead/Dashboard'
import Alerts from './components/layout/Alerts' 

export const types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
}

const alertOptions = {
  timeout: 3000, 
  position: 'top center', 
  offset: "10px", 
  type: types.error
}


export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <AlertProvider template={ AlertTemplate } {...alertOptions}>
          <Fragment>
            <Header/>
            <Alerts/>
            <div className="container">
            <Dashboard/>
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    )
  }
}

