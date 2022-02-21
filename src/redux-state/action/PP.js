import axios from "axios";
import { getProfile } from "./profile";

const user = JSON.parse(localStorage.getItem('user'))

export const putPPRequest = () => {
    return {
        type: "PUT_PP_REQUEST"
    }
}

export const putPPRes = (data) => {
    return {
        type: "PUT_PP_RES",
        payload: data
    }
}

export const putPPErr = (message) => {
    return {
        type: "PUT_PP_ERR",
        payload: message
    }
}

export const putPP = ({PPData, handleModal}) => {
    return async (dispatch) => {
        try{
            const res = await axios.put(`http://localhost:5000/users/profile-picture/${user.id}`, PPData)
            const {data} = res.data
            dispatch(putPPRes(data))
            handleModal()
            dispatch(getProfile())
        } catch (error) {
            const message = error
            dispatch(putPPErr(message))
        }
    }
}