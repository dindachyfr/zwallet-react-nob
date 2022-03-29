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
    const profileData = useSelector((state) => state.Profile)
    useEffect(() => {
        dispatch(getProfile())
    }, [])

    const handleManagePhone = () => {
        if (!profileData.data.phone_number) {
            navigate('/profile/managephone')
        } else {
            navigate('/profile/managephone/existing')

        }
    }

    return (
        <section className="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5 p-3">
            <div class="d-flex d-lg-none align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-arrow-left d-block d-lg-none text-secondary"
                    viewBox="0 0 16 16"
                    onClick={() => navigate(-1)}>
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                <h3 class="text-secondary pt-lg-3 p-3 p-lg-0">Personal Information</h3>
            </div>
            <h3 className='my-3 d-lg-block d-none'>Personal Information</h3>
            <p className='my-5 w-50 text-secondary'>We got your information from the sign up process. If you
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
                <div className='d-flex justify-content-between align-items-between'>
                    <div>
                        <h6 className='text-1'>Phone Number</h6>
                        <h4>{profileData.data.phone_number}</h4>
                    </div>
                    <p className='text-manage m-0 link-text fw-bold' onClick={handleManagePhone}>Manage</p>
                </div>
            </section>

        </section>
    )
}

export default PersonalInfo2
