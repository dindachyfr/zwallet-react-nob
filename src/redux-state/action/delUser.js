import axios from "axios";
import { getUser } from "./user";

const token = localStorage.getItem('token')

export const delUserRequest = () => {
    return {
        type: "DEL_USER_REQUEST"
    }
}

export const delUserRes = (data) => {
    return {
        type: "DEL_USER_RES",
        payload: data
    }
}

export const delUserErr = (payload) => {
    return {
        type: "DEL_USER_ERR",
        payload
    }
}

export const delUser = ({id, querySearch}) => {
    return (dispatch) => {
        dispatch(delUserRequest())
            return axios({
                method: 'DELETE',
                url: `${process.env.REACT_APP_URL_BACKEND}/users/${id}`,
                headers: {Authorization: `Bearer ${token}`}
            }).then((res) => {
                const data = res.data?.data
                dispatch(delUserRes(data))
                dispatch(getUser(querySearch))
            }).catch((err) => {
                const message = err.message
                dispatch(delUserErr(message))
            })
    }
}