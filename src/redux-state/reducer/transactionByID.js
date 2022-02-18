const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchTransaction = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_TRANSACTION_REQUEST':
           return {
               ...state, 
               loading: true};
        case 'GET_TRANSACTION_RES':
            return{
                ...state, 
                loading: false, 
                data: action.payload};
        case 'GET_TRANSACTION_ERR':
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
export default FetchTransaction;