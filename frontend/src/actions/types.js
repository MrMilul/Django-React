export const GET_LEADS = 'GET_LEADS'

export const FETCH_LEADS_DATA = (data) => {
    return {
        type:GET_LEADS, 
        payload: data
    } 
}