import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'))

export const getIncomeRequest = () => {
    return {
        type: "GET_INCOME_REQUEST"
    }
}

export const getIncomeRes = (data) => {
    return {
        type: "GET_INCOME_RES",
        payload: data
    }
}

export const getIncomeErr = (payload) => {
    return {
        type: "GET_INCOME_ERR",
        payload
    }
}

export const getIncome = () => {
    return (dispatch) => {
        dispatch(getIncomeRequest())
            return axios({
                method: 'GET',
                url: `http://localhost:5000/transaction/transfer/income/user/${user.wallet_id}`,
            }).then((res) => {
                const data = res.data?.data[0]
                dispatch(getIncomeRes(data))
            }).catch((err) => {
                const message = err.message
                dispatch(getIncomeErr(message))
            })
    }
}