const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchRegister = (state = initialState, action={}) => {
    switch (action.type) {
        case 'REGISTER_REQUEST':
           return {
               ...state, 
               loading: true,
                error: false};
        case 'REGISTER_RES':
            return{
                ...state,
                error: false, 
                loading: false, 
                data: action.payload};
        case 'REGISTER_ERR':
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
export default FetchRegister;