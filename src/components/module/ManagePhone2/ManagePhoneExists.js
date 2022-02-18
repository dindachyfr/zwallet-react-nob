import React, { useContext, useEffect, useState } from 'react'
import Trash from './trash.svg'
import './phone.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../../Context/UserContext'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux-state/action/profile';
import { putPhone } from '../../../redux-state/action/putPhone'

const ManagePhoneExists = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    const profileData = useSelector((state)=> state.Profile)

    useEffect(()=>{
        dispatch(getProfile())
      }, [])
  
    const setPhoneNumber = () => {
        dispatch(putPhone({navigate, phone: ""}))
    }

    return (
        <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5">
            <h3>Add Phone Number</h3>
            <p className='my-5 w-50'>You can only delete the existing phone number and add a new one.</p>

            <section className='w-100 p-3 shadow-sm my-5'>
            <p className='text-secondary'>Primary</p>
            <div className='d-flex justify-content-between w-100'>
                    <h2>{profileData.data.phone_number}</h2>
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
