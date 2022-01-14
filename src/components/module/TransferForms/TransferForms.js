import React, { useEffect, useState} from 'react'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import Input from '../../base/Input'
import Note from './note-icon.svg'
import './transfer-form.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const TransferForms = () => {

    const {id} = useParams() 
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const [form, setForm] = useState({
        amount: 0,
        notes: ''
    })
    const [receiver, setReceiver] = useState({
        id: '',
        name: '',
        phone_number: '',
        email: '',
        wallet_id: 0,
        balance: 0
    })

    const handleForm = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }


    useEffect(()=>{
        axios.get(`https://zwallet-dinda.herokuapp.com/users/${id}`)
        // axios.get(`http://localhost:5000/users/${id}`)
        .then((res)=>{
            const result = res.data.data[0]
            setReceiver(result)
            localStorage.setItem('receiver', JSON.stringify(result))
        })
        .catch((err)=>{
            console.log(err.response);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleTransfer = () =>{
        axios.post('https://zwallet-dinda.herokuapp.com/transaction/transfer', {
        // axios.post('http://localhost:5000/transaction/transfer', {
            sender_wallet_id: user.wallet_id, 
            receiver_wallet_id: receiver.wallet_id, 
            amount: form.amount, 
            notes: form.notes
        })
        .then((res)=>{
            const result = res.data.data
            localStorage.setItem('transaction', JSON.stringify(result))
            navigate('/transfer/confirmation')
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }

    return (
        <section className="trans-history h-100 w-lg-75 w-100 d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-3">               
        <div className="history-upper d-flex flex-column px-5 py-lg-0 py-3 w-100">  
            <h3 className="text-secondary pt-lg-3 p-3 p-lg-0 title-history">Transfer to</h3>
            <div class='recipient d-flex justify-content-between align-items-between shadow-sm py-1'>
                        <div class="recipient d-flex ms-3">
                            <img src={UserImage} alt=''/>
                            <div className='text-secondary ms-3'>
                                {/* <h5>Cahyono</h5> */}
                                <h5>{receiver.name}</h5>
                                {/* <h5>082783826409</h5> */}
                                <h5>{receiver.phone_number}</h5>
                            </div>
                        </div>
            </div>       
        </div>
        <div className="history-lower h-100 d-flex flex-column justify-content-between px-5 pt-5">
                    <p className='text-secondary w-50 d-none d-lg-block'>Type the amount you want to transfer and then
                        press continue to the next steps.</p>
                    <div className='mx-auto'>
                        <Input 
                        name="amount"
                        value={form.amount}
                        onChange={handleForm}
                        className='input-amount bg-transparent' 
                        placeholder="0.00" 
                        type="number"/>
                    </div>
                    <h3 className='text-secondary mx-auto'>IDR {user.balance} Available</h3>
                    <div className='input-notes mx-auto'>
                        <div className='d-flex wrapper-input-notes border-secondary border-bottom pb-1'>
                            <img src={Note} alt=''/>
                            <Input
                            name="notes"
                            value={form.notes}
                            onChange={handleForm} 
                            className='bg-transparent ms-3 border-0 text-secondary' 
                            placeholder="Add some notes" 
                            type='text'/>
                        </div>

                    </div>
                    <div className='continue d-flex justify-content-end pb-3'>
                        <button 
                        className='continue-button' 
                        onClick={handleTransfer}>
                            Continue
                            </button>
                    </div>
                </div>

    </section>    
)
}

export default TransferForms
