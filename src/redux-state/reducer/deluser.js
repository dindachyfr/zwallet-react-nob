const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchDelUser = (state = initialState, action={}) => {
    switch (action.type) {
        case 'DEL_USER_REQUEST':
           return {
               ...state, 
               loading: true};
        case 'DEL_USER_RES':
            return{
                ...state, 
                loading: false, 
                data: action.payload};
        case 'DEL_USER_ERR':
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
export default FetchDelUser;