import React, { Component } from 'react'
import { postLead }from '../../actions/leads'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


export class Form extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            message:"",
        }
    }
    formHandler = (ev)=>{
        let name = ev.target.name
        let value = ev.target.value
        this.setState({
            [name]:value
        })

    }
    submit = (e) =>{
        e.preventDefault();
        const {name, message, email} = this.state
        let lead = { name, message, email}
        this.props.postLead(lead)
    }
    render() {
        return (
            <form className="col-lg-5 border" onSubmit={this.submit}>
             <div className="form-group mt-3">
              <label htmlFor="exampleInputPassword1">Name</label>
              <input  className="form-control" 
              id="exampleInputPassword1" name="name" onChange={this.formHandler}/>
            </div>    
            <div className="form-group ">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" 
              id="exampleInputEmail1" name="email" onChange={this.formHandler}
              aria-describedby="emailHelp"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword2">Message</label>
              <textarea  className="form-control" 
              id="exampleInputPassword2" name="message" onChange={this.formHandler}/>
            </div>
            {/* <button type="submit" className="btn btn-primary mb-3" 
                onClick={this.props.postLead.bind(this, this.state)}>
                Submit</button> */}
                <button type="submit" className="btn btn-primary mb-3">
                    Submit
                </button>
          </form>
        )
    }
}



export default connect(null, {postLead})(Form)