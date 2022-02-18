const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPostTransfer = (state = initialState, action={}) => {
    switch (action.type) {
        case 'POST_TRANSFER_REQUEST':
           return {
               ...state, 
               loading: true,
                error: false};
        case 'POST_TRANSFER_RES':
            return{
                ...state,
                error: false, 
                loading: false, 
                data: action.payload};
        case 'POST_TRANSFER_ERR':
            return {
                ...state,
                loading: false,
                error: true,
                data: action.payload
            };
        default:
            return state;
    }
}
export default FetchPostTransfer;