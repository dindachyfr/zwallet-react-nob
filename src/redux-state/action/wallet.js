import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'))

export const getWalletRequest = () => {
    return {
        type: "GET_WALLET_REQUEST"
    }
}

export const getWalletRes = (data) => {
    return {
        type: "GET_WALLET_RES",
        payload: data
    }
}

export const getWalletErr = (payload) => {
    return {
        type: "GET_WALLET_ERR",
        payload
    }
}

export const getWallet = () => {
    return (dispatch) => {
        dispatch(getWalletRequest())
            return axios({
                method: 'GET',
                url: `http://localhost:5000/user-wallet/${user.wallet_id}`,
            }).then((res) => {
                const data = res.data?.data[0]
                dispatch(getWalletRes(data))
            }).catch((err) => {
                const message = err.message
                dispatch(getWalletRes(message))
            })
    }
}