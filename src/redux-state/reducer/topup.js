const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchTopup = (state = initialState, action={}) => {
    switch (action.type) {
        case 'TOPUP_REQUEST':
           return {
               ...state, 
               loading: true,
                error: false};
        case 'TOPUP_RES':
            return{
                ...state,
                error: false, 
                loading: false, 
                data: action.payload};
        case 'TOPUP_ERR':
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
export default FetchTopup;