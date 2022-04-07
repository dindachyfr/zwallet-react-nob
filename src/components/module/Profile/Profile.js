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
import { putPP } from '../../../redux-state/action/PP'

import axios from 'axios'
import LogoutModal from '../SidebarMenu/Modal'

const ProfileMain = () => {

    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const profileData = useSelector((state) => state.Profile)
    useEffect(() => {
        dispatch(getProfile())
    }, [])

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    const [modalPP, setModalPP] = useState(false)
    const [PP, setPP] = useState()
    const handleModal = () => setModalPP(!modalPP)
    const [modal, setModal] = useState(false)
    const handleModal1 = () => setModal(!modal)
    const handlePP = (e) => {
        e.preventDefault()
        setPP(e.target.files[0])
        console.log(PP);
    }

    const handleSetPP = (e) => {
        e.preventDefault()
        const PPData = new FormData()
        PPData.append('profile_picture', PP)
        dispatch(putPP({ PPData, handleModal }))
        // axios.put(`http://localhost:5000/users/profile-picture/${user.id}`, PPData)
        // .then((res) => {
        //     window.location.reload()
        // }).catch((err)=>{
        //     console.log(err.message);
        // })
    }

    return (
        <section class="trans-history w-75 bg-white shadow-sm p-lg-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                class="bi bi-arrow-left d-block d-lg-none text-secondary mt-5 m-3"
                viewBox="0 0 16 16"
                onClick={() => navigate("/")}>
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>

            <div className='user-wrapper d-flex justify-content-center'>
                <img className="user-pic " src={profileData.data.profile_picture ? profileData.data.profile_picture : UserImage} alt="" />
            </div>
            <div
                className="text-secondary-custom flex-direction-row d-flex mt-3 edit-section"
                onClick={handleModal}>
                <img className='note-pic' src={Note} alt="" />
                <p className='m-0 ms-2'>Edit</p>
            </div>
            <h3 className='user-name d-flex justify-content-center my-3'>{profileData.data.name}</h3>
            <h5 className='text-secondary-custom d-flex'>{profileData.data.phone_number}</h5>

            <div className='w-100 d-flex justify-content-center mt-5'>
                <section className='d-flex card-profile w-50 justify-content-between py-3 p-3'
                    onClick={() => navigate('/profile/personal-info')}>
                    <h4>Personal Information</h4>
                    <img src={Arrow} alt="" />
                </section>
            </div>

            <div className='w-100 d-flex justify-content-center mt-4'>
                <section className='d-flex card-profile w-50 justify-content-between py-3 p-3'
                onClick={()=>navigate("/profile/change-password")}>
                    <h4>Change Password</h4>
                    <img src={Arrow} alt="" />
                </section>
            </div>

            <div className='w-100 d-flex justify-content-center mt-4'>
                <section className='d-flex card-profile w-50 justify-content-between py-3 p-3'
                    onClick={() => navigate('/profile/managePIN')}>
                    <h4>Change PIN</h4>
                    <img src={Arrow} alt="" />
                </section>
            </div>

            <div className='w-100 d-flex justify-content-center mt-4'>
                <section className='d-flex card-profile w-50 justify-content-start py-3 p-3'
                    onClick={handleModal1}>
                    <h4>Logout</h4>
                    <br />
                </section>
            </div>
            {modal && <LogoutModal handleModal={handleModal1} handleLogout={handleLogout} />}
            {modalPP &&
                <main class="con container-fluid d-flex flex-column p-0 justify-content-between">
                    <div class="modal-pin-2 bg-light w-25 h-50 p-3 m-3">
                        <div class="top-modal d-flex justify-content-between m-3">
                            <h4>Set Profile Picture</h4>
                            <h3 class="close-modal" onClick={handleModal}>x</h3>
                        </div>
                        <p class="text-secondary m-3 mb-5">Set a cool picture of you to your profile</p>
                        <div className='wrapper-pp-modal w-100 d-flex justify-content-center'>
                            <img className="user-pic-modal my-auto" src={profileData.data.profile_picture ? profileData.data.profile_picture : UserImage} alt="" />
                        </div>
                        <form
                            encType='multipart/form-data'
                            className='wrapper-pp-modal w-100 d-flex justify-content-center pt-3'>
                            <input className='pp-input' type='file' onChange={handlePP} />
                        </form>
                        <div class="button-wrapper w-100 d-flex justify-content-end pt-3">
                            <button
                                class='continue-button'
                                onClick={handleSetPP}
                            >Save Changes
                            </button>
                        </div>

                    </div>
                </main>
            }

        </section>
    )
}

export default ProfileMain
