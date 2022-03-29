/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import UserImage from './NangIs-icon.svg'
import Notification from './bell-icon.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux-state/action/profile';
import './navbar.css'
import NotifModal from '../NotifModal';

const Navbar = () => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const profileData = useSelector((state) => state.Profile)
    useEffect(() => {
        dispatch(getProfile())
    }, [])


    const navigate = useNavigate()

    return (
        <nav className="nav-bar-home bg-white d-lg-flex d-none shadow-sm">
            <div className="nav-wrapper-home w-100 mx-lg-5 mx-3 d-flex justify-content-between align-items-center">
                <h1 className="nav-left text-primary d-none d-lg-block w-50 justify-content-start">Zwallet</h1>
                <div
                    className="nav-right d-flex justify-content-lg-end justify-content-between w-100 w-lg-50 align-items-between">
                    <div className='wrapper-navbar-pic mt-2 d-flex d-lg-block align-items-center'
                        onClick={() => navigate('/profile')}>
                        <img className="user-pic-nav" src={profileData.data.profile_picture ? profileData.data.profile_picture : UserImage} alt="" />
                        <div className="ms-3 d-flex flex-column">
                            <h4 className="d-lg-none d-block mb-0 fw-light">Hello,</h4>
                            <h4 className="fw-bold d-lg-none d-block">{profileData.data.name}</h4>
                        </div>
                    </div>
                    <div className='d-none d-lg-block text-secondary mx-3'>
                        <h5>{profileData.data.name}</h5>
                        <h5>{profileData.data.phone_number}</h5>
                    </div>
                    {/* <div className="d-block d-lg-none text-secondary mx-3">
                        <h4>Balance</h4>
                        <h4 className='text-white'>IDR {user.balance}</h4>
                        </div> */}
                    <img src={Notification} alt='' onClick={() => setModal(!modal)} />
                </div>
            </div>

            {modal && <NotifModal />}

        </nav>
    )
}

export default Navbar
