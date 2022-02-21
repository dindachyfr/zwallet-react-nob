/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import UserImage from './NangIs-icon.svg'
import Notification from './bell-icon.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux-state/action/profile';
import './navbar.css'

const Navbar = () => {
    const dispatch = useDispatch()
    const profileData = useSelector((state)=> state.Profile)
    useEffect(()=>{
      dispatch(getProfile())
    }, [])


    const navigate = useNavigate()

    return (
        <nav className="nav-bar-home bg-white d-flex shadow-sm">
        <div className="nav-wrapper-home w-100 mx-5 d-flex align-items-center">
                <h1 className="nav-left text-primary d-none d-lg-block w-50 justify-content-start">Zwallet</h1>
                <div 
                className="nav-right d-flex justify-content-lg-end justify-content-between w-100 w-lg-50 align-items-between"
                onClick={()=>navigate('/profile')}>
                    <div className='wrapper-navbar-pic mt-2'>
                    <img className= "user-pic-nav" src={profileData.data.profile_picture? profileData.data.profile_picture : UserImage} alt="" />
                        </div>                    
                    <div className='d-none d-lg-block text-secondary mx-3'>
                        <h4>{profileData.data.name}</h4>
                        <h4>{profileData.data.phone_number}</h4>
                    </div>
                    {/* <div className="d-block d-lg-none text-secondary mx-3">
                        <h4>Balance</h4>
                        <h4 className='text-white'>IDR {user.balance}</h4>
                        </div> */}
                    <img src={Notification} alt=''/>
                </div>
            </div>

    </nav>
    )
}

export default Navbar
