const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchPhoneUpdt = (state = initialState, action={}) => {
    switch (action.type) {
        case 'PUT_PHONE_REQUEST':
           return {
               ...state, 
               loading: true,
                error: false};
        case 'PUT_PHONE_RES':
            return{
                ...state,
                error: false, 
                loading: false, 
                data: action.payload};
        case 'PUT_PHONE_ERR':
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
export default FetchPhoneUpdt;