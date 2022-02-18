const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPutTransaction = (state = initialState, action={}) => {
    switch (action.type) {
        case 'PUT_TRANSACTION_REQUEST':
           return {
               ...state, 
               loading: true,
                error: false};
        case 'PUT_TRANSACTION_RES':
            return{
                ...state,
                error: false, 
                loading: false, 
                data: action.payload};
        case 'PUT_TRANSACTION_ERR':
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
export default FetchPutTransaction;