import axios from 'axios'

import { FETCH_LEADS_DATA} from './types'


export const getLeads = () => dispatch =>{
   axios.get('http://127.0.0.1:8000/api/lead/')
    .then(res =>{
        dispatch(FETCH_LEADS_DATA(res.data))
    })
    .catch(err => {
        console.log(err)
    })
}   