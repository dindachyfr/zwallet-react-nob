import React, { useContext, useEffect, useState } from 'react'
import UserImage from '../../module/Navbar/NangIs-icon.svg'
import Arrow from '../Profile/arrow-left.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux-state/action/profile';

const Admin = () => {
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
        <section class="trans-history w-75 bg-white shadow-sm p-lg-3">
            <img class='d-block d-lg-none' src='back-icon.svg' alt='' />
            <div className='user-wrapper d-flex justify-content-center'>
                <img className="user-pic " src={profileData.data.profile_picture ? profileData.data.profile_picture : UserImage} alt="" />
            </div>
            <h3 className='user-name d-flex justify-content-center my-3'>{profileData.data.name}</h3>
            <h5 className='text-secondary-custom d-flex'>Admin</h5>

            <div className='w-100 d-flex justify-content-center mt-5'>
                <section className='d-flex card-profile w-50 justify-content-between py-3 p-3'
            onClick={() => navigate('/admin/users')}
            >
                    <h4>Manage User</h4>
                    <img src={Arrow} alt="" />
                </section>
            </div>

            <div className='w-100 d-flex justify-content-center mt-4'
            >
                <section className='d-flex card-profile w-50 justify-content-between py-3 p-3'
            onClick={() => navigate('/admin/notification')}
            >
                    <h4>Create Notification</h4>
                    <img src={Arrow} alt="" />
                </section>
            </div>

            <div className='w-100 d-flex justify-content-center mt-4'>
                <section className='d-flex card-profile w-50 justify-content-start py-3 p-3'
                    onClick={handleLogout}>
                    <h4>Logout</h4>
                    <br />
                </section>
            </div>

        </section>
    )
}

export default Admin