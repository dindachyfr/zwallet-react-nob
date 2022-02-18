import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'))

export const putPhoneRequest = () => {
    return {
        type: "PUT_PHONE_REQUEST"
    }
}

export const putPhoneRes = (data) => {
    return {
        type: "PUT_PHONE_RES",
        payload: data
    }
}

export const putPhoneErr = (message) => {
    return {
        type: "PUT_PHONE_ERR",
        payload: message
    }
}

export const putPhone = ({phone, navigate}) => {
    return async (dispatch) => {
        try{
            const res = await axios.put(`http://localhost:5000/users/phone/${user.id}`, {
                phone_number: phone
                    })
            const {data} = res.data
            dispatch(putPhoneRes(data))
            navigate('/profile')
        } catch (error) {
            const message = error
            dispatch(putPhoneErr(message))
        }
    }
}