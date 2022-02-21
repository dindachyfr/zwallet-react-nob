const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchLogin = (state = initialState, action={}) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
           return {
               ...state, 
               loading: true,
                error: false};
        case 'LOGIN_RES':
            return{
                ...state,
                error: false, 
                loading: false, 
                data: action.payload};
        case 'LOGIN_ERR':
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
export default FetchLogin;