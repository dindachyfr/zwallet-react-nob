const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPINUpdt = (state = initialState, action={}) => {
    switch (action.type) {
        case 'PUT_PIN_REQUEST':
           return {
               ...state, 
               loading: true,
                error: false};
        case 'PUT_PIN_RES':
            return{
                ...state,
                error: false, 
                loading: false, 
                data: action.payload};
        case 'PUT_PIN_ERR':
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
export default FetchPINUpdt;