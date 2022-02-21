const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPPUpdt = (state = initialState, action={}) => {
    switch (action.type) {
        case 'PUT_PP_REQUEST':
           return {
               ...state, 
               loading: true,
                error: false};
        case 'PUT_PP_RES':
            return{
                ...state,
                error: false, 
                loading: false, 
                data: action.payload};
        case 'PUT_PP_ERR':
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
export default FetchPPUpdt;