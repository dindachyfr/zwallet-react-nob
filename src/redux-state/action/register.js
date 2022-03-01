import axios from "axios";

export const registerRequest = () => {
    return {
        type: "REGISTER_REQUEST"
    }
}

export const registerRes = (data) => {
    return {
        type: "REGISTER_RES",
        payload: data
    }
}

export const registerErr = (message) => {
    return {
        type: "REGISTER_ERR",
        payload: message
    }
}

export const register = ({form, navigate, setErrorMsg}) => {
    return async (dispatch) => {
        try{
            const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/users/register`, form)
            const {data} = res
            const pin = data.data
            dispatch(registerRes(data))
            localStorage.setItem('pins', JSON.stringify(pin))
            navigate('/register/create-pin')
        } catch (error) {
            const message = error
            dispatch(registerErr(message))
            setErrorMsg("Email already exists!")
        }
    }
}

