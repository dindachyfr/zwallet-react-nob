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
            const res = await axios.post(`http://localhost:5000/users/login`, form)
            const {data} = res
            const user = data.data
            const token = user.token
            dispatch(loginRes(data))
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', token)
            navigate('/')
        } catch (error) {
            const message = error
            dispatch(loginErr(message))
            setErrorMsg("Wrong password/email!")
        }
    }
}

