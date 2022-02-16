import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext(null)

const UserContext = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user'))

    const [profile, setProfile] = useState({
        id: 0,
        name: "",
        phone_number: "",
        email: "",
        pin: "",
        wallet_id: 0,
        balance: 0
    })

    useEffect (()=>{
        if(user){
        // axios.get(`https://zwallet-dinda.herokuapp.com/users/${user.id}`)
        axios.get(`http://localhost:5000/users/${user.id}`)
        .then((res)=>{
            const result = res.data.data[0]
            setProfile(result)
        }).catch((err)=>{
            console.log(err.response);

        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <userContext.Provider value = {{profile, setProfile}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext
