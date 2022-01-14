import React, { useEffect, useState } from 'react'
import './profile.css'
import UserImage from '../../module/Navbar/NangIs-icon.svg'
import './profile.css'
import Note from '../TransferForms/note-icon.svg'
import Arrow from './arrow-left.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProfileMain = () => {
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
    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.clear()
        navigate('/login')
    }

    useEffect (()=>{
        axios.get(`https://zwallet-dinda.herokuapp.com/users/${user.id}`)
        .then((res)=>{
            const result = res.data.data[0]
            setProfile(result)
        }).catch((err)=>{
            console.log(err.response);

        })

    }, [])

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
                    <h3 className='user-name d-flex justify-content-center my-3'>{profile.name}</h3>
                    <h5 className='text-secondary-custom d-flex'>{profile.phone_number}</h5>

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
