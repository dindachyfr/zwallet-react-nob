import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import '../../../pages/Home/home.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TransactionHistory = () => {

    const navigate = useNavigate()
    const [transactions, setTransactions] = useState([]);

    useEffect(()=>{
        axios.get('https://zwallet-dinda.herokuapp.com/transaction?limit=4')
        .then((res)=>{
            const result = res.data.data
            setTransactions(result)
        }).catch((err)=>{
            console.log(err.response);

        })
    }, [])

    const moveToHistory = ()=>{
        navigate('/history')
    }

    return (
        <section className="trans-history d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-1 ms-lg-3">
            <div className="history-upper d-flex justify-content-between align-items-center px-5 h-25">
                <h5 className="text-secondary">Transaction History</h5>
                <h5 className='lead link' onClick={moveToHistory}>See all</h5>
                </div> 
            <div className="history-lower d-flex flex-column justify-content-between px-lg-5 h-75">
                {transactions.map((transaction)=>{
                    return(
                        <div className='recipient d-flex justify-content-between align-items-center'>
                        <div className="recipient-detail d-flex">
                        <img src={UserImage} alt=''/>
                        <div className='text-secondary ms-3'>
                            <h5>{transaction.receiver}</h5>
                            <h5>Transfer</h5>
                            </div>
                        </div>
                        <h5 className='text-danger'>- IDR {transaction.amount}</h5>
                    </div>
                        )
                })}

                {/* <div className='recipient d-flex justify-content-between align-items-center'>
                                <div className="recipient-detail d-flex">
                                <img src={UserImage} alt=''/>
                                    <div className='text-secondary ms-3'>
                                        <h5>Amanda Lim</h5>
                                        <h5>Transfer</h5>
                                    </div>
                                </div>
                            <h5 className='text-success'>+RP 120.000</h5>
                        </div>

                <div className='recipient d-flex justify-content-between align-items-center'>
                        <div className="recipient-detail d-flex">
                        <img src={UserImage} alt=''/>
                            <div className='text-secondary ms-3'>
                                <h5>Cahyono</h5>
                                <h5>Transfer</h5>
                            </div>
                        </div>
                    <h5 className='text-success'>+RP 10.000</h5>
                </div>

                <div className='recipient d-flex justify-content-between align-items-center'>
                                <div className="recipient-detail d-flex">
                                <img src={UserImage} alt=''/>
                                    <div className='text-secondary ms-3'>
                                        <h5>Nani Sunani</h5>
                                        <h5>Transfer</h5>
                                    </div>
                                </div>
                            <h5 className='text-success'>+RP 20.000</h5>
                        </div> */}

                </div>           
        </section>
    )
}

export default TransactionHistory
