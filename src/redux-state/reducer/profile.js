const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchProfile = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_PROFILE_REQUEST':
           return {
               ...state, 
               loading: true};
        case 'GET_PROFILE_RES':
            return{
                ...state, 
                loading: false, 
                data: action.payload};
        case 'GET_PROFILE_ERR':
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
export default FetchProfile;