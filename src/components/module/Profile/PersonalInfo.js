/* eslint-disable no-unused-vars */
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import './personal-info.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux-state/action/profile';


const PersonalInfo2 = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const profileData = useSelector((state)=> state.Profile)
    useEffect(()=>{
      dispatch(getProfile())
    }, [])

    const handleManagePhone = () =>{
        if(!profileData.data.phone_number){
            navigate('/profile/managephone')
        }else {
            navigate('/profile/managephone/existing')

        }
    }

    return (
        <section className="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5">
            <h3 className='my-3'>Personal Information</h3>
            <p className='my-5 w-50'>We got your information from the sign up process. If you
            want to make changes on your information, contact our support</p>     

            <section className='card-personal-info w-100 p-3 shadow-sm my-5'>
                <h6 className='text-1'>Name</h6>
                <h4>{profileData.data.name}</h4>
                </section>   
                
            <section className='card-personal-info w-100 p-3 shadow-sm my-5'>
            <h6 className='text-1'>Verified Email</h6>
            <h4>{profileData.data.email}</h4>
            </section>    

            <section className='card-personal-info w-100 p-3 shadow-sm my-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h6 className='text-1'>Phone Number</h6>
                        <h4>{profileData.data.phone_number}</h4>
                    </div>
                    <h5 className='text-primary link-text' onClick={handleManagePhone}>Manage</h5>
                </div>
            </section>    

        </section>
        )
}

export default PersonalInfo2
