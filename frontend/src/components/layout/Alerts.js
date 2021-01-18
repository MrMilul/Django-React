import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'

class Alerts extends Component {
    componentDidUpdate(prevProps) {
        const {error, alert} = this.props
        if (error !== prevProps){
            if(error.msg.name){
                alert.error(`Name: ${error.msg.name.join()}`)
            }
            else if(error.msg.email){
                alert.error(`Eamail: ${error.msg.email.join()}`)
            }
        }
    }
    render() {
        return <Fragment />
    }
}

const mapStateToProps = state => ({
    error: state.errors
})


export default connect(mapStateToProps)(withAlert() (Alerts));