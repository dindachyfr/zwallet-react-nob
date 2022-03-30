import axios from "axios";

const token = typeof window !== 'undefined' && localStorage.getItem('token')

export const getProfileRequest = () => {
    return {
        type: "GET_PROFILE_REQUEST"
    }
}

export const getProfileRes = (data) => {
    return {
        type: "GET_PROFILE_RES",
        payload: data
    }
}

export const getProfileErr = (payload) => {
    return {
        type: "GET_PROFILE_ERR",
        payload
    }
}

export const getProfile = () => {
    return (dispatch) => {
        dispatch(getProfileRequest())
            return axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL_BACKEND}/users/user/profile`,
                headers: {Authorization: `Bearer ${token}`}
            }).then((res) => {
                const data = res.data?.data[0]
                dispatch(getProfileRes(data))
            }).catch((err) => {
                const message = err.message
                dispatch(getProfileErr(message))
            })
    }
}