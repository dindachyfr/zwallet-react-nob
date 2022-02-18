const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchUID = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_UID_REQUEST':
           return {
               ...state, 
               loading: true};
        case 'GET_UID_RES':
            return{
                ...state, 
                loading: false, 
                data: action.payload};
        case 'GET_UID_ERR':
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
export default FetchUID;