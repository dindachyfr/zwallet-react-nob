import axios from "axios";


export const getNotifRequest = () => {
    return {
        type: "GET_NOTIF_REQUEST"
    }
}

export const getNotifRes = (data) => {
    return {
        type: "GET_NOTIF_RES",
        payload: data
    }
}

export const getNotifErr = (payload) => {
    return {
        type: "GET_NOTIF_ERR",
        payload
    }
}

export const getNotif = () => {
    return (dispatch) => {
        dispatch(getNotifRequest())
            return axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL_BACKEND}/notification`,
            }).then((res) => {
                const data = res.data?.data
                dispatch(getNotifRes(data))
            }).catch((err) => {
                const message = err.message
                dispatch(getNotifErr(message))
            })
    }
}