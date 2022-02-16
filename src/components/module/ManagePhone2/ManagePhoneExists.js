import React, { useContext, useState } from 'react'
import Trash from './trash.svg'
import './phone.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../../Context/UserContext'


const ManagePhoneExists = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const {profile, setProfile} = useContext(userContext)

    const setPhoneNumber = () =>{
        // axios.put(`https://zwallet-dinda.herokuapp.com/users/phone/${user.id}`,
        axios.put(`http://localhost:5000/users/phone/${user.id}`,
        { phone_number: "" })
        .then((res)=> {
            setProfile({
                ...profile, 
                phone_number: ""
            })
            navigate('/profile')
        })
    }

    return (
        <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5">
            <h3>Add Phone Number</h3>
            <p className='my-5 w-50'>You can only delete the existing phone number and add a new one.</p>

            <section className='w-100 p-3 shadow-sm my-5'>
            <p className='text-secondary'>Primary</p>
            <div className='d-flex justify-content-between w-100'>
                    <h2>{profile.phone_number}</h2>
                    <img 
                    className='link-text'
                    onClick={setPhoneNumber}
                    src={Trash} alt="" />
            </div>
            </section>

        </section>
    )
}

export default ManagePhoneExists
