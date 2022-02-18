import React, { useContext, useState } from 'react'
import Input from '../../base/Input'
import Phone from './phone.svg'
import './phone.css'
import Button from '../../base/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../../Context/UserContext'
import { useDispatch } from 'react-redux'
import { putPhone } from '../../../redux-state/action/putPhone'

const ManagePhone2 = () => {
    const navigate = useNavigate()
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch()
    const handleChange = (e) =>{
        setPhone(e.target.value)
    }
    console.log(phone);

    const setPhoneNumber = () => {
        dispatch(putPhone({navigate, phone}))
    }

    return (
        <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5">
            <h3>Add Phone Number</h3>
            <p className='my-5 w-50'>Add at least one phone number for the transfer ID,
             so you can start transferring your money to another user.</p>

             <div className='input-notes mx-auto'>
                        <div className='d-flex wrapper-input-notes border-secondary border-bottom pb-1'>
                            <img src={Phone} alt=''/>
                            <Input
                            onChange= {handleChange}
                            name="notes"
                            className='bg-transparent ms-3 border-0 text-secondary' 
                            placeholder="Enter your phone number" 
                            type='number'/>
                        </div>
                        </div>

            <section className='w-100 d-flex justify-content-center mt-5'>
            <Button className="btn btn-secondary w-50 p-3 mt-5"
            onClick={setPhoneNumber}>Save</Button>
            </section>


        </section>
    )
}

export default ManagePhone2
