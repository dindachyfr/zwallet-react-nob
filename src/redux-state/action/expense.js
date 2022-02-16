import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'))

export const getExpenseRequest = () => {
    return {
        type: "GET_EXPENSE_REQUEST"
    }
}

export const getExpenseRes = (data) => {
    return {
        type: "GET_EXPENSE_RES",
        payload: data
    }
}

export const getExpenseErr = (payload) => {
    return {
        type: "GET_EXPENSE_ERR",
        payload
    }
}

export const getExpense = () => {
    return (dispatch) => {
        dispatch(getExpenseRequest())
            return axios({
                method: 'GET',
                url: `http://localhost:5000/transaction/transfer/expense/user/${user.wallet_id}`,
            }).then((res) => {
                const data = res.data?.data[0]
                dispatch(getExpenseRes(data))
            }).catch((err) => {
                const message = err.message
                dispatch(getExpenseErr(message))
            })
    }
}