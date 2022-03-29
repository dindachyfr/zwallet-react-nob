import React, { useContext, useEffect, useState } from 'react'
import Trash from './trash.svg'
import './phone.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../../Context/UserContext'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux-state/action/profile';
import { putPhone } from '../../../redux-state/action/putPhone'
import DelModal from './DelModal'

const ManagePhoneExists = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    const profileData = useSelector((state) => state.Profile)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        dispatch(getProfile())
    }, [])

    const setPhoneNumber = () => {
        dispatch(putPhone({ navigate, phone: "" }))
    }

    const handleModal = () => setModal(!modal)

    return (
        <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5 p-3">
            <div class="d-flex d-lg-none align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-arrow-left d-block d-lg-none text-secondary"
                    viewBox="0 0 16 16"
                    onClick={() => navigate(-1)}>
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                <h3 class="text-secondary pt-lg-3 p-3 p-lg-0">Manage Phone Number</h3>
            </div>

            <h3 className='d-lg-block d-none'>Manage Phone Number</h3>
            <p className='my-5 w-50 texttt'>You can only delete the existing phone number and add a new one.</p>

            <section className='w-100 p-3 shadow-sm my-5'>
                <p className='text-secondary'>Primary</p>
                <div className='d-flex justify-content-between w-100'>
                    <h2>{profileData.data.phone_number}</h2>
                    <img
                        className='link-text'
                        onClick={handleModal}
                        src={Trash} alt="" />
                </div>
            </section>
            {modal && <DelModal handleModal={handleModal} handleDelPhone={setPhoneNumber}/>}
        </section>
    )
}

export default ManagePhoneExists
