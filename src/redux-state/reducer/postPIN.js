const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPIN = (state = initialState, action={}) => {
    switch (action.type) {
        case 'POST_PIN_REQUEST':
           return {
               ...state, 
               loading: true,
                error: false};
        case 'POST_PIN_RES':
            return{
                ...state,
                error: false, 
                loading: false, 
                data: action.payload};
        case 'POST_PIN_ERR':
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
export default FetchPIN;