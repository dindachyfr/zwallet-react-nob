import axios from "axios";

const token = localStorage.getItem('token')
export const postNotifRequest = () => {
    return {
        type: "POST_NOTIF_REQUEST"
    }
}

export const postNotifRes = (data) => {
    return {
        type: "POST_NOTIF_RES",
        payload: data
    }
}

export const postNotifErr = (payload) => {
    return {
        type: "POST_NOTIF_ERR",
        payload
    }
}

export const postNotif = ({formData, navigate}) => {
    return (dispatch) => {
        dispatch(postNotifRequest())
            return axios.post(`${process.env.REACT_APP_URL_BACKEND}/notification`,
            formData,
            {headers: {Authorization: `Bearer ${token}`}}
            ).then((res) => {
                const data = res.data?.data
                dispatch(postNotifRes(data))
                navigate('/admin')
            }).catch((err) => {
                const message = err.message
                dispatch(postNotifErr(message))
                alert("Failed to post notification")
            })
    }
}