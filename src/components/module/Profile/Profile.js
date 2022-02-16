/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import './profile.css'
import UserImage from '../../module/Navbar/NangIs-icon.svg'
import './profile.css'
import Note from '../TransferForms/note-icon.svg'
import Arrow from './arrow-left.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux-state/action/profile';

const ProfileMain = () => {

    const dispatch = useDispatch()
    const profileData = useSelector((state)=> state.Profile)
    useEffect(()=>{
      dispatch(getProfile())
    }, [])


    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.clear()
        navigate('/login')
    }


    return (
            <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-3">               
                    <img class='d-block d-lg-none' src='back-icon.svg' alt=''/>
                    <div className='user-wrapper d-flex justify-content-center'>
                    <img className= "user-pic " src={UserImage} alt="" />
                    </div>
                    <div className="text-secondary-custom flex-direction-row d-flex mt-3">
                        <img className='note-pic' src={Note} alt="" />
                        <p className='m-0 ms-2'>Edit</p>
                        </div>
                    <h3 className='user-name d-flex justify-content-center my-3'>{profileData.data.name}</h3>
                    <h5 className='text-secondary-custom d-flex'>{profileData.data.phone_number}</h5>

                <div className='w-100 d-flex justify-content-center mt-5'>
                    <section className='d-flex card-profile w-50 justify-content-between py-3 p-3'
                    onClick={()=>navigate('/profile/personal-info')}>
                        <h4>Personal Information</h4>
                        <img src={Arrow} alt="" />
                    </section>
                    </div>

                <div className='w-100 d-flex justify-content-center mt-4'>
                <section className='d-flex card-profile w-50 justify-content-between py-3 p-3'>
                    <h4>Change Password</h4>
                    <img src={Arrow} alt="" />
                </section>
                </div>

                <div className='w-100 d-flex justify-content-center mt-4'>
                <section className='d-flex card-profile w-50 justify-content-between py-3 p-3' 
                onClick={()=>navigate('/profile/managePIN')}>
                    <h4>Change PIN</h4>
                    <img src={Arrow} alt="" />
                </section>
                </div>

                <div className='w-100 d-flex justify-content-center mt-4'>
                <section className='d-flex card-profile w-50 justify-content-start py-3 p-3' 
                onClick={handleLogout}>
                    <h4>Logout</h4>
                    <br/>
                </section>
                </div>


            </section>
    )
}

export default ProfileMain
