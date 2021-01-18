export const GET_LEADS = 'GET_LEADS'
export const DELETE_LEAD = 'DELETE_LEAD'
export const POST_LEAD = "POST_LEAD"
export const GET_ERRORS = "GET_ERRORS"


export const FETCH_LEADS_DATA = (data) => {
    return {
        type:GET_LEADS, 
        payload: data
    } 
}

export const DELETE_LEAD_DATA = (id)=>{
    return {
        type:DELETE_LEAD, 
        payload: id
    }
}

export const POST_LEAD_DATA = (data) =>{
    return {
        type:POST_LEAD, 
        payload: data
    }
}

export const GET_ERRORS_DATA = (err)=>{
    return {
        type: GET_ERRORS, 
        payload: err
    }
}