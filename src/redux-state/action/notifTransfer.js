import axios from "axios";


export const getNotifTransferRequest = () => {
    return {
        type: "GET_NOTIFTRANSFER_REQUEST"
    }
}

export const getNotifTransferRes = (data) => {
    return {
        type: "GET_NOTIFTRANSFER_RES",
        payload: data
    }
}

export const getNotifTransferErr = (payload) => {
    return {
        type: "GET_NOTIFTRANSFER_ERR",
        payload
    }
}

export const getNotifTransfer = (id) => {
    return (dispatch) => {
        dispatch(getNotifTransferRequest())
            return axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL_BACKEND}/transaction/notification/${id}`,
            }).then((res) => {
                const data = res.data?.data
                dispatch(getNotifTransferRes(data))
            }).catch((err) => {
                const message = err.message
                dispatch(getNotifTransferErr(message))
            })
    }
}