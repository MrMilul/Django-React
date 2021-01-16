import React, { Component } from 'react'

import Leads from './leads'
import Form from './Form'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Leads />
                <Form/>
            </div>
        )
    }
}
