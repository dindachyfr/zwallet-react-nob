/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import Input from '../../base/Input'
import Note from './note-icon.svg'
import './transfer-form.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { walletContext } from '../../../Context/WalletContext'
import { useDispatch, useSelector } from 'react-redux';
import { getUID } from '../../../redux-state/action/userByID';
import { postTransfer } from '../../../redux-state/action/postTransfer'
import Button from '../../base/Button'

const TransferForms = () => {
    const { id } = useParams()
    const user = JSON.parse(localStorage.getItem('user'))
    const receiver = JSON.parse(localStorage.getItem('receiver'))
    const navigate = useNavigate()
    const { wallet, setWallet } = useContext(walletContext)
    const [errMsg, setErrMsg] = useState("");

    const [form, setForm] = useState({
        amount: null,
        notes: ''
    })

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const dispatch = useDispatch()
    const receiverData = useSelector((state) => state.UserByID)
    console.log(receiverData);
    useEffect(() => {
        dispatch(getUID(id))
    }, [])

    const handleTransfer = () => {
        if (form.amount > 0) {
            dispatch(postTransfer({
                amount: form.amount,
                notes: form.notes,
                sender_wallet_id: user.wallet_id,
                receiver_wallet_id: receiver.wallet_id,
                navigate,
                setErrMsg
            }))
        } else {
            setErrMsg("Please input valid amount only!")
        }
    }

    // const handleTransfer = () =>{
    //     if (form.amount > 0 ){
    //         axios.post('https://zwallet-dinda.herokuapp.com/transaction/transfer', {
    //             // axios.post('http://localhost:5000/transaction/transfer', {
    //                 sender_wallet_id: user.wallet_id, 
    //                 receiver_wallet_id: receiver.wallet_id, 
    //                 amount: form.amount, 
    //                 notes: form.notes
    //             })
    //             .then((res)=>{
    //                 const result = res.data.data
    //                 localStorage.setItem('transaction', JSON.stringify(result))
    //                 navigate('/transfer/confirmation')
    //             })
    //             .catch((err)=>{
    //                 console.log(err.response);
    //             })
    //             } else {
    //                 setErrMsg("Please input valid amount only!")
    //             }
    // }

    return (
        <section className="trans-history h-100 w-75 d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-3">
            <div className="history-upper-h2 d-flex flex-column px-lg-5 px-3 py-lg-0 py-3 w-100">
                <div className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-arrow-left d-block d-lg-none text-white"
                        viewBox="0 0 16 16"
                        onClick={() => navigate(-1)}>
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>

                    <h3 className="text-secondary pt-lg-3 p-3 p-lg-0 title-history">Transfer to</h3>
                </div>
                <div class='recipient d-flex justify-content-between align-items-between shadow-sm py-1'>
                    <div class="d-flex w-100 ms-3 py-3">
                        <img src={UserImage} alt='' />
                        <div className='text-secondary ms-3'>
                            {/* <h5>Cahyono</h5> */}
                            <h5>{receiverData.data.name}</h5>
                            {/* <h5>082783826409</h5> */}
                            <h5>{receiverData.data.phone_number}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="history-lower h-100 d-flex flex-column justify-content-between px-lg-5 px-3 pt-5">
                <p className='text-secondary w-50 d-none d-lg-block'>Type the amount you want to transfer and then
                    press continue to the next steps.</p>
                <div className='mx-auto'>
                    <Input
                        name="amount"
                        value={form.amount}
                        onChange={handleForm}
                        className='input-amount bg-transparent'
                        placeholder="0.00"
                        autoFocus
                        type="number" />
                </div>
                <h5 className='text-secondary mx-auto'>IDR {wallet.balance} Available</h5>
                <div className='input-notes mx-auto'>
                    <div className='d-flex wrapper-input-notes border-secondary border-bottom pb-1'>
                        <img src={Note} alt='' />
                        <Input
                            name="notes"
                            value={form.notes}
                            onChange={handleForm}
                            className='bg-transparent ms-3 border-0 text-secondary input-note'
                            placeholder="Add some notes"
                            type='text' />
                    </div>

                </div>
                <div className='continue d-flex justify-content-end pb-3'>
                    <Button
                        className='btn continue-button2 pointer'
                        disabled={!form.amount}
                        onClick={handleTransfer}>
                        Continue
                    </Button>
                </div>
            </div>
            {errMsg && <h3 className="text-danger">{errMsg}</h3>}
        </section>
    )
}

export default TransferForms
