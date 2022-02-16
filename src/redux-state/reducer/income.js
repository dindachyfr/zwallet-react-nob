const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchIncome = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_INCOME_REQUEST':
           return {
               ...state, 
               loading: true};
        case 'GET_INCOME_RES':
            return{
                ...state, 
                loading: false, 
                data: action.payload};
        case 'GET_INCOME_ERR':
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
export default FetchIncome;