import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'))

export const postPINRequest = () => {
    return {
        type: "POST_PIN_REQUEST"
    }
}

export const postPINRes = (data) => {
    return {
        type: "POST_PIN_RES",
        payload: data
    }
}

export const postPINErr = (message) => {
    return {
        type: "POST_PIN_ERR",
        payload: message
    }
}

export const postPIN = (pinValue, navigate, setErrorMsg) => {
    return async (dispatch) => {
        try{
            const res = await axios.post(`http://localhost:5000/users/pinconfirm/${user.id}`, {
                        pin: pinValue
                    })
            const {data} = res
            dispatch(postPINRes(data))
            navigate('/profile/managePIN/set-new')
        } catch (error) {
            const message = error
            dispatch(postPINErr(message))
            setErrorMsg("You entered the wrong PIN!")
        }
        // dispatch(postPINRequest())
        //     return axios.post(`http://localhost:5000/users/pinconfirm/${user.id}`, {
        //         pin: pinValue
        //     }).then((res) => {
        //         const data = res.data?.data[0]
        //         dispatch(postPINRes(data))
        //     }).catch((err) => {
        //         const message = err.message
        //         dispatch(postPINErr(message))
        //     })
    }
}

// export const postPIN = (pinValue) => {
//     return (dispatch) => {
//         dispatch(postPINRequest())
//             return axios.post(`http://localhost:5000/users/pinconfirm/${user.id}`, {
//                 pin: pinValue
//             }).then(
//                 response => dispatch(postPINRes(response.data?.data[0])),
//                 error => dispatch(postPINErr(error.message))
//             )
// }
// }