import axios from "axios";

const token = localStorage.getItem('token')

export const getUserRequest = () => {
    return {
        type: "GET_USER_REQUEST"
    }
}

export const getUserRes = (data) => {
    return {
        type: "GET_USER_RES",
        payload: data
    }
}

export const getUserErr = (payload) => {
    return {
        type: "GET_USER_ERR",
        payload
    }
}

export const getUser = (querySearch) => {
    return (dispatch) => {
        dispatch(getUserRequest())
        if(querySearch){
            return axios({
                method: 'GET',
                url: `http://localhost:5000/users?limit=4&filter=${querySearch}`,
                headers: {Authorization: `Bearer ${token}`}
            }).then((res) => {
                const data = res.data?.data
                console.log(res);
                dispatch(getUserRes(data))
            }).catch((err) => {
                const message = err.message
                dispatch(getUserErr(message))
            })
            }else{
                return axios({
                    method: 'GET',
                    url: `http://localhost:5000/users?limit=4`,
                    headers: {Authorization: `Bearer ${token}`}
                }).then((res) => {
                    const data = res.data?.data
                    console.log(res);
                    dispatch(getUserRes(data))
                }).catch((err) => {
                    const message = err.message
                    dispatch(getUserErr(message))
                })
                }
    }
}