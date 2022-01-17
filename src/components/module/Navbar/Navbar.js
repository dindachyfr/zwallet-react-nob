/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import UserImage from './NangIs-icon.svg'
import Notification from './bell-icon.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../../Context/UserContext'

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const {profile, setProfile} = useContext(userContext)
    // const [profile, setProfile] = useState({
    //     id: 0,
    //     name: "",
    //     phone_number: "",
    //     email: "",
    //     pin: "",
    //     wallet_id: 0,
    //     balance: 0
    // })

    // useEffect (()=>{
    //     axios.get(`https://zwallet-dinda.herokuapp.com/users/${user.id}`)
    //     .then((res)=>{
    //         const result = res.data.data[0]
    //         setProfile(result)
    //     }).catch((err)=>{
    //         console.log(err.response);

    //     })

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    const navigate = useNavigate()

    return (
        <nav className="nav-bar-home bg-white d-flex shadow-sm">
        <div className="nav-wrapper-home w-100 mx-5 d-flex align-items-center">
                <h1 className="nav-left text-primary d-none d-lg-block w-50 justify-content-start">Zwallet</h1>
                <div className="nav-right d-flex justify-content-lg-end justify-content-between w-100 w-lg-50 align-items-between">                    
                <img src={UserImage} onClick={()=>navigate('/profile')} alt='' className='pic'/>
                    <div className='d-none d-lg-block text-secondary mx-3'>
                        <h4>{profile.name}</h4>
                        <h4>{profile.phone_number}</h4>
                    </div>
                    <div className="d-block d-lg-none text-secondary mx-3">
                        <h4>Balance</h4>
                        <h4 className='text-white'>IDR {user.balance}</h4>
                        </div>
                    <img src={Notification} alt=''/>
                </div>
            </div>

    </nav>
    )
}

export default Navbar
