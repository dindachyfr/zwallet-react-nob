const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPostNotif = (state = initialState, action={}) => {
    switch (action.type) {
        case 'POST_NOTIF_REQUEST':
           return {
               ...state, 
               loading: true};
        case 'POST_NOTIF_RES':
            return{
                ...state, 
                loading: false, 
                data: action.payload};
        case 'POST_NOTIF_ERR':
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
export default FetchPostNotif;