/* eslint-disable no-unused-vars */
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import './personal-info.css'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../../Context/UserContext'

const PersonalInfo2 = () => {
    const navigate = useNavigate()
    // const user = JSON.parse(localStorage.getItem('user'))
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

    return (
        <section className="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5">
            <h3 className='my-3'>Personal Information</h3>
            <p className='my-5 w-50'>We got your information from the sign up process. If you
            want to make changes on your information, contact our support</p>     

            <section className='card-personal-info w-100 p-3 shadow-sm my-5'>
                <h6 className='text-1'>Name</h6>
                <h4>{profile.name}</h4>
                </section>   
                
            <section className='card-personal-info w-100 p-3 shadow-sm my-5'>
            <h6 className='text-1'>Verified Email</h6>
            <h4>{profile.email}</h4>
            </section>    

            <section className='card-personal-info w-100 p-3 shadow-sm my-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h6 className='text-1'>Phone Number</h6>
                        <h4>{profile.phone_number}</h4>
                    </div>
                    <h5 className='text-primary link-text' onClick={()=> navigate("/profile/managephone")}>Manage</h5>
                </div>
            </section>    

        </section>
        )
}

export default PersonalInfo2
