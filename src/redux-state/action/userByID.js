import axios from "axios";


export const getUIDRequest = () => {
    return {
        type: "GET_UID_REQUEST"
    }
}

export const getUIDRes = (data) => {
    return {
        type: "GET_UID_RES",
        payload: data
    }
}

export const getUIDErr = (payload) => {
    return {
        type: "GET_UID_ERR",
        payload
    }
}

export const getUID = (id) => {
    return (dispatch) => {
        dispatch(getUIDRequest())
            return axios({
                method: 'GET',
                url: `http://localhost:5000/users/${id}`,
            }).then((res) => {
                const data = res.data?.data[0]
                dispatch(getUIDRes(data))
                localStorage.setItem('receiver', JSON.stringify(data))
            }).catch((err) => {
                const message = err.message
                dispatch(getUIDErr(message))
            })
    }
}