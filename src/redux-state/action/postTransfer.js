import axios from "axios";

export const postTransferRequest = () => {
    return {
        type: "POST_TRANSFER_REQUEST"
    }
}

export const postTransferRes = (data) => {
    return {
        type: "POST_TRANSFER_RES",
        payload: data
    }
}

export const postTransferErr = (payload) => {
    return {
        type: "POST_TRANSFER_ERR",
        payload
    }
}

export const postTransfer = ({amount, notes, navigate, setErrMsg, sender_wallet_id, receiver_wallet_id}) => {
    return async (dispatch) => {
        try{
            const res = await axios.post(`http://localhost:5000/transaction/transfer`, {
                sender_wallet_id, 
                receiver_wallet_id, 
                amount, 
                notes
            })
            const {data} = res
            dispatch(postTransferRes(data))
            localStorage.setItem('transaction', JSON.stringify(data))
            navigate('/transfer/confirmation')
            } catch (error) {
            const message = error
            dispatch(postTransferErr(message))
            setErrMsg("Internal Server Error")
        }
    }
}