const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPWUpdt = (state = initialState, action={}) => {
    switch (action.type) {
        case 'PUT_PW_REQUEST':
           return {
               ...state, 
               loading: true,
                error: false};
        case 'PUT_PW_RES':
            return{
                ...state,
                error: false, 
                loading: false, 
                data: action.payload};
        case 'PUT_PW_ERR':
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
export default FetchPWUpdt;