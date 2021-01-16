import React, { Component } from 'react'
import { getLeads, deleteLead }from '../../actions/leads'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class Leads extends Component {
    constructor(props){
        super();
    }
    static propTypes = {
        leads: PropTypes.array.isRequired
    }
    componentDidMount() {
        this.props.getLeads()
    }

   
    render() {
        return (
            <table className="table table-hover mt-3">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                        <th scope="col">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.leads.map(lead=>{
                        return(
                        <tr key={lead.id}>
                            <th scope="row">{lead.id}</th>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td><button onClick={this.props.deleteLead.bind(this, lead.id)}
                                className="btn btn-danger btn-sm">
                                Delete</button></td>
                                
                        </tr>
                            )
                    })
                    }
                </tbody>
                </table>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads, 
})

export default connect(mapStateToProps, { getLeads,deleteLead })(Leads)