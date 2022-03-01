import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'))


export const putTransactionRequest = () => {
    return {
        type: "PUT_TRANSACTION_REQUEST"
    }
}

export const putTransactionRes = (data) => {
    return {
        type: "PUT_TRANSACTION_RES",
        payload: data
    }
}

export const putTransactionErr = (message) => {
    return {
        type: "PUT_TRANSACTION_ERR",
        payload: message
    }
}

export const putTransaction = ({pinValue, navigate, setErrorMsg, transID}) => {
    return async (dispatch) => {
        try{
            const res = await axios.put(`${process.env.REACT_APP_URL_BACKEND}/transaction/transfer/confirm/${user.id}/${user.wallet_id}/${transID}`, {
                        pin: pinValue
                    })
            const {data} = res
            dispatch(putTransactionRes(data))
            navigate('/')
            localStorage.removeItem('receiver')
            localStorage.removeItem('transaction')
            localStorage.removeItem('receipt')
        } catch (error) {
            const message = error
            dispatch(putTransactionErr(message))
            setErrorMsg("You entered the wrong PIN!")
        }
    }
}