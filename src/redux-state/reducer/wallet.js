const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchWallet = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_WALLET_REQUEST':
           return {
               ...state, 
               loading: true};
        case 'GET_WALLET_RES':
            return{
                ...state, 
                loading: false, 
                data: action.payload};
        case 'GET_WALLET_ERR':
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
export default FetchWallet;