import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'

const TransHistory = () => {

    const [transactions, setTransactions] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
        // axios.get(`https://zwallet-dinda.herokuapp.com/transaction/history/${user.wallet_id}?limit=4`)
        axios.get(`${process.env.REACT_APP_URL_BACKEND}/transaction/history/${user.wallet_id}?limit=4`)
        .then((res)=>{
            const result = res.data.data
            setTransactions(result)
        }).catch((err)=>{
            console.log(err.response);

        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <section class="trans-history w-lg-75 w-100 d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-3">               
            <div class="history-upper d-flex px-5">                    
                    <img class='d-block d-lg-none' src='back-icon.svg' alt=''/>
                    <h3 class="text-secondary pt-lg-3 p-3 p-lg-0 title-history">Transaction History</h3>
                </div>
            
            <div class="history-lower h-100 d-flex flex-column justify-content-evenly px-lg-5 pt-3 pt-lg-0">
                <h4 class="text-secondary ps-lg-0 ps-3">Within This Week</h4>
                {transactions.map((transaction)=>{
                    return (
                        <div class='recipient d-flex justify-content-between align-items-between'>
                        <div class="recipient d-flex">
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
                {/* <div class='recipient d-flex justify-content-between align-items-between'>
                        <div class="recipient d-flex">
                            <img src={UserImage} alt=''/>
                            <div className='text-secondary ms-3'>
                                <h5>Samuel Suhi</h5>
                                <h5>Transfer</h5>
                            </div>
                        </div>
                    <h5 className='text-success'>+RP 10.000</h5>
                        </div>
                        <div class='recipient d-flex justify-content-between align-items-between'>
                        <div class="recipient d-flex">
                            <img src={UserImage} alt=''/>
                            <div className='text-secondary ms-3'>
                                <h5>Amanda Lim</h5>
                                <h5>Transfer</h5>
                            </div>
                        </div>
                    <h5 className='text-success'>+RP 120.000</h5>
                        </div>
                        <div class='recipient d-flex justify-content-between align-items-between'>
                        <div class="recipient d-flex">
                            <img src={UserImage} alt=''/>
                            <div className='text-secondary ms-3'>
                                <h5>Cahyono</h5>
                                <h5>Transfer</h5>
                            </div>
                        </div>
                    <h5 className='text-success'>+RP 10.000</h5>
                        </div>
                        <div class='recipient d-flex justify-content-between align-items-between'>
                        <div class="recipient d-flex">
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
        </Fragment>
)
}

export default TransHistory
