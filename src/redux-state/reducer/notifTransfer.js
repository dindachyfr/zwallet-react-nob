const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchNotifTransfer = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_NOTIFTRANSFER_REQUEST':
           return {
               ...state, 
               loading: true};
        case 'GET_NOTIFTRANSFER_RES':
            return{
                ...state, 
                loading: false, 
                data: action.payload};
        case 'GET_NOTIFTRANSFER_ERR':
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
export default FetchNotifTransfer;