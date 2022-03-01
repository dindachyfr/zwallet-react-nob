import axios from "axios";

export const loginRequest = () => {
    return {
        type: "LOGIN_REQUEST"
    }
}

export const loginRes = (data) => {
    return {
        type: "LOGIN_RES",
        payload: data
    }
}

export const loginErr = (message) => {
    return {
        type: "LOGIN_ERR",
        payload: message
    }
}

export const login = ({form, navigate, setErrorMsg}) => {
    return async (dispatch) => {
        try{
            const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/users/login`, form)
            const {data} = res
            const user = data.data
            const token = user.token
            const role = user.role
            dispatch(loginRes(data))
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', token)
            localStorage.setItem('role', role)
            navigate('/')
        } catch (error) {
            const message = error
            dispatch(loginErr(message))
            setErrorMsg("Wrong password/email!")
        }
    }
}

