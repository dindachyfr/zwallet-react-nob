import axios from "axios";

export const putPWRequest = () => {
    return {
        type: "PUT_PW_REQUEST"
    }
}

export const putPWRes = (data) => {
    return {
        type: "PUT_PW_RES",
        payload: data
    }
}

export const putPWErr = (message) => {
    return {
        type: "PUT_PW_ERR",
        payload: message
    }
}

export const putPW = ({form, id , setErrMSG, handleModal}) => {
    return async (dispatch) => {
        try{
            const res = await axios.put(`${process.env.REACT_APP_URL_BACKEND}/users/password/${id}`, form)
            const {data} = res
            dispatch(putPWRes(data))
            handleModal()
        } catch (error) {
            const message = error
            dispatch(putPWErr(message))
            setErrMSG(message.response.data.message)
        }
    }
}

