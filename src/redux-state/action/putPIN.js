import axios from "axios";

export const putPINRequest = () => {
    return {
        type: "PUT_PIN_REQUEST"
    }
}

export const putPINRes = (data) => {
    return {
        type: "PUT_PIN_RES",
        payload: data
    }
}

export const putPINErr = (message) => {
    return {
        type: "PUT_PIN_ERR",
        payload: message
    }
}

export const putPIN = (pinValue, navigate, id) => {
    return async (dispatch) => {
        try{
            const res = await axios.put(`${process.env.REACT_APP_URL_BACKEND}/users/pin/${id}`, {
                        pin: pinValue
                    })
            const {data} = res
            dispatch(putPINRes(data))
            navigate('/profile')
        } catch (error) {
            const message = error
            dispatch(putPINErr(message))
        }
        // dispatch(putPINRequest())
        //     return axios.PUT(`http://localhost:5000/users/pinconfirm/${user.id}`, {
        //         pin: pinValue
        //     }).then((res) => {
        //         const data = res.data?.data[0]
        //         dispatch(putPINRes(data))
        //     }).catch((err) => {
        //         const message = err.message
        //         dispatch(putPINErr(message))
        //     })
    }
}

// export const putPIN = (pinValue) => {
//     return (dispatch) => {
//         dispatch(putPINRequest())
//             return axios.PUT(`http://localhost:5000/users/pinconfirm/${user.id}`, {
//                 pin: pinValue
//             }).then(
//                 response => dispatch(putPINRes(response.data?.data[0])),
//                 error => dispatch(putPINErr(error.message))
//             )
// }
// }