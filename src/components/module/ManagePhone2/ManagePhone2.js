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
    const handleChange = (e) => {
        setPhone(e.target.value)
    }
    console.log(phone);

    const setPhoneNumber = () => {
        dispatch(putPhone({ navigate, phone }))
    }

    return (
        <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-3 p-lg-5">
            <div class="d-flex d-lg-none align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-arrow-left d-block d-lg-none text-secondary"
                    viewBox="0 0 16 16"
                    onClick={() => navigate(-1)}>
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                <h3 class="text-secondary pt-lg-3 p-3 p-lg-0">Add Phone Number</h3>
            </div>
            <h3 className='d-lg-block d-none'>Add Phone Number</h3>
            <p className='my-5 d-lg-block d-none w-50'>Add at least one phone number for the transfer ID,
                so you can start transferring your money to another user.</p>
            <p className="d-block d-lg-none text-secondary text-center w-100">
                Add at least one phone number for the transfer ID so you can start transfering your money to another user.
            </p>
            <div className='input-notes mx-auto'>
                <div className='d-flex wrapper-input-notes border-secondary border-bottom pb-1'>
                    <img src={Phone} alt='' />
                    <Input
                        onChange={handleChange}
                        name="notes"
                        className='bg-transparent ms-3 border-0 text-secondary'
                        placeholder="Enter your phone number"
                        type='number' />
                </div>
            </div>

            <section className='w-100 d-flex justify-content-center mt-5'>
                <Button
                    className="btn btn-login pointer w-50 p-3 mt-5"
                    onClick={setPhoneNumber}
                    disabled={!phone}
                    >Save</Button>
            </section>


        </section>
    )
}

export default ManagePhone2
