import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../base/Button'
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../base/Input'
import PadlockIcon from '../../module/Login/padlock-icon.svg'
import { putPW } from '../../../redux-state/action/putPW';
import SuccessModal from './successModal';

const ChangePW = () => {
    const navigate = useNavigate()
    const putPWData = useSelector((state)=> state.PutPW)
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()
    const [errMSG, setErrMSG] = useState('')
    const [modal, setModal] = useState(false)
    const [form, setForm] = useState({
        currentPW: '',
        newPW1: '',
        newPW2: ''
    })
    const handleForm = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }
    const handleChangePW = () => {
        // dispatch(putPW({form, id: user.id, navigate, setErrMSG, handleModal}))
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
                <h3 class="text-secondary pt-lg-3 p-3 p-lg-0">Change Password</h3>
            </div>

            <h3 className='my-3 d-lg-block d-none'>Change Password</h3>
            <p className='my-5 w-50 inner2'>You must enter your current password and then type your new password twice.</p>

            <section className='w-100 h-50 d-flex flex-column align-items-center'>
                <form className="input-group w-50 flex-nowrap">
                    <span className="input-group-text wrapping2" id="addon-wrapping"><img src={PadlockIcon} alt='' /></span>
                    <Input
                        name="currentPW"
                        value={form.currentPW}
                        onChange={handleForm}
                        type="password"
                        className="form-control formPW"
                        placeholder="Enter your current password"
                        aria-describedby="addon-wrapping" />
                </form>
                <form className="input-group my-5 w-50 flex-nowrap">
                    <span className="input-group-text wrapping2" id="addon-wrapping"><img src={PadlockIcon} alt='' /></span>
                    <Input
                        name="newPW1"
                        value={form.newPW1}
                        onChange={handleForm}
                        type="password"
                        className="form-control formPW"
                        placeholder="Enter your new password"
                        aria-describedby="addon-wrapping" />
                </form>
                <form className="input-group w-50 flex-nowrap">
                    <span className="input-group-text wrapping2" id="addon-wrapping"><img src={PadlockIcon} alt='' /></span>
                    <Input
                        name="newPW2"
                        value={form.newPW2}
                        onChange={handleForm}
                        type="password"
                        className="form-control formPW"
                        placeholder="Confirm your new password"
                        aria-describedby="addon-wrapping" />
                </form>
            </section>
            {errMSG && <h5 className="mb-0 text-danger">{errMSG}</h5>}
            <section className='w-100 mt-5 d-flex justify-content-center'>
                <Button
                    className="btn btn-login pointer w-50 p-3"
                    onClick={handleChangePW}
                    isLoading={putPWData.loading}
                    disabled={!form.currentPW || !form.newPW1 || !form.newPW2 || form.newPW1.length !== form.newPW2.length}
                >
                    Change Password</Button>
            </section>
            {modal && <SuccessModal navigate={navigate}/>}
        </section>
    )
}

export default ChangePW
