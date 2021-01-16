import React, { Component } from 'react'

import Leads from './leads'
import Form from './Form'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Leads />
                <hr className="m-5"/>
                <div className="row justify-content-center">
                     <Form/>
                </div>
                
            </div>
        )
    }
}
