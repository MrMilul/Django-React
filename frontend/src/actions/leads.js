import axios from 'axios'

import {DELETE_LEAD_DATA, FETCH_LEADS_DATA, POST_LEAD_DATA, GET_ERRORS_DATA} from './types'


export const getLeads = () => dispatch =>{
   axios.get('http://127.0.0.1:8000/api/lead/')
    .then(res =>{
        dispatch(FETCH_LEADS_DATA(res.data))
    })
    .catch(err => {
        console.log(err)
    })
}   

export const deleteLead = (id)=> dispatch =>{
    axios.delete(`http://127.0.0.1:8000/api/lead/${id}`)
    .then(res =>{
        dispatch(DELETE_LEAD_DATA(id))
    })
    .catch(err =>{console.log(err)})
}

export const postLead = (data)=> dispatch =>{
    const config = {
        headers:{
            "content-type": "application/json"
        }
    }
    axios.post('http://127.0.0.1:8000/api/lead/', data, config)
    .then(res =>{
        dispatch(POST_LEAD_DATA(data))
    })
    .catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch(GET_ERRORS_DATA(errors))
    })
}