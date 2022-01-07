import React, { useEffect, useState } from 'react'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const TransferConfMain = () => {

    const receiver = JSON.parse(localStorage.getItem('receiver'))
    const user = JSON.parse(localStorage.getItem('user'))
    const transaction = JSON.parse(localStorage.getItem('transaction'))

    const navigate = useNavigate()

    const [receipt, setReceipt] = useState({
        receiver_wallet_id: 0,
        receiver: '',
        phone_number: '',
        amount: 0,
        date: '',
        notes: ''
    })

    useEffect(()=>{
        axios.get(`https://zwallet-dinda.herokuapp.com/transaction/${transaction.insertId}`)
        .then((res)=>{
            const result = res.data.data[0]
            setReceipt(result)
            localStorage.setItem('receipt', JSON.stringify(result))
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }, [])


    const handleConfirm = ()=>{
        axios.put(`https://zwallet-dinda.herokuapp.com/transaction/transfer/confirm/${user.wallet_id}/${transaction.insertId}`)
        navigate('/')
        setTimeout(()=>{
            localStorage.removeItem('receiver')
            localStorage.removeItem('transaction')
            localStorage.removeItem('receipt')
        },
            1500)
    }


    return (
        <section class="trans-history h-100 w-lg-75 w-100 d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-3">               
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

        <div class="history-lower h-100 d-flex flex-column justify-content-between px-5 pt-lg-1 pt-5">
                    <h4 class='text-secondary d-none d-lg-block'>Details</h4>
                    <div class="d-flex flex-lg-column flex-row justify-content-between w-100">
                        <div class='recipient inner shadow-sm my-md-1 mx-lg-0 mx-1'>
                            <div class="recipient p-2">
                                <p class='text-secondary'>Amount</p>
                                <h4 class='text-secondary'>IDR {receipt.amount}</h4>
                             </div>
                        </div>
                        <div class='recipient inner shadow-sm my-md-1 mx-lg-0 mx-1'>
                            <div class="recipient p-2">
                                <p class='text-secondary'>Balance</p>
                                <h4 class='text-secondary'>{user.balance}</h4>
                             </div>
                        </div>
                        </div>

                        <div class="d-flex flex-lg-column flex-row justify-content-between w-100">
                            <div class='recipient inner shadow-sm my-md-1 mx-lg-0 mx-1'>
                                <div class="recipient p-2">
                                    <p class='text-secondary'>Date</p>
                                    <h4 class='text-secondary'>{receipt.date}</h4>
                                </div>
                            </div>
                    </div>
                    <div class='recipient shadow-sm my-md-1'>
                        <div class="recipient p-2">
                            <p class='text-secondary'>Notes</p>
                            <h4 class='text-secondary'>{receipt.notes}</h4>
                         </div>
                    </div>



                <div class='continue d-flex justify-content-end py-1'>
                    <button 
                    class='continue-button'
                    onClick={handleConfirm}
                    >Continue</button>
                </div>

                </div>

        </section>
        )
}

export default TransferConfMain
