import axios from "axios";

export const topupRequest = () => {
    return {
        type: "TOPUP_REQUEST"
    }
}

export const topupRes = (data) => {
    return {
        type: "TOPUP_RES",
        payload: data
    }
}

export const topupErr = (message) => {
    return {
        type: "TOPUP_ERR",
        payload: message
    }
}

export const topup = ({amount, navigate, id}) => {
    return async (dispatch) => {
        try{
            const res = await axios.put(`${process.env.REACT_APP_URL_BACKEND}/user-wallet/topup/${id}`, {
                        amount
                    })
            const {data} = res
            dispatch(topupRes(data))
            navigate('/')
        } catch (error) {
            const message = error
            dispatch(topupErr(message))
        }
    }
}

