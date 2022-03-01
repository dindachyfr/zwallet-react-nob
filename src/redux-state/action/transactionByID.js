import axios from "axios";


export const getTransactionRequest = () => {
    return {
        type: "GET_TRANSACTION_REQUEST"
    }
}

export const getTransactionRes = (data) => {
    return {
        type: "GET_TRANSACTION_RES",
        payload: data
    }
}

export const getTransactionErr = (payload) => {
    return {
        type: "GET_TRANSACTION_ERR",
        payload
    }
}

export const getTransaction = (id) => {
    return (dispatch) => {
        dispatch(getTransactionRequest())
            return axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL_BACKEND}/transaction/${id}`,
            }).then((res) => {
                const data = res.data?.data[0]
                dispatch(getTransactionRes(data))
            }).catch((err) => {
                const message = err.message
                dispatch(getTransactionErr(message))
            })
    }
}