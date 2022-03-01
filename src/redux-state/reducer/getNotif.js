const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchNotif = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_NOTIF_REQUEST':
           return {
               ...state, 
               loading: true};
        case 'GET_NOTIF_RES':
            return{
                ...state, 
                loading: false, 
                data: action.payload};
        case 'GET_NOTIF_ERR':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            };
        default:
            return state;
    }
}
export default FetchNotif;