import React, { useContext, useEffect, useState } from 'react'
import Button from '../../base/Button'
import '../../../pages/Home/home.css'
import Transfer from './transfer-icon.png'
import TopUp from './transfer-icon.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { walletContext } from '../../../Context/WalletContext'

const WalletInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const [wallet, setWallet] = useState({
        id: 0,
        user_id: 0,
        balance: 0
    })

    const moveToTransfer = ()=>{
        navigate('/transfer')
    }

    useEffect(()=>{
        axios.get(`https://zwallet-dinda.herokuapp.com/user-wallet/${user.wallet_id}`)
        .then((res)=>{
            const result = res.data.data[0]
            setWallet(result)
            localStorage.setItem('wallet', JSON.stringify(result))
        })
        .catch((err)=>{
            console.log(err.response);
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    // const {wallet, setWallet} = useContext(walletContext)


    return (
        <section className="balance-box-home shadow-sm h-25">
        <div className="wrapper-balance-home d-block d-lg-flex p-3 justify-content-between w-100">
            <div className="balance-left-home d-lg-flex d-none flex-column justify-content-between text-white">
                <h3>Balance</h3>
                <h1>IDR {wallet.balance}</h1>
                <h3>0876-9283-3729</h3>
            </div>

            <div className="balance-right-home d-flex flex-lg-column align-items-center justify-content-between text-white pe-lg-5 py-lg-3">
                <Button type="button" className="btn btn-outline-lg-light btn-outline-home ms-lg-0 p-3 mb-lg-2" onClick={moveToTransfer}>
                    <img src={Transfer} alt=''/>
                    Transfer
                </Button>
                <Button type="button" className="btn ms-lg-0 ms-1 btn-outline-home p-3">
                    <img src={TopUp} alt=''/>
                    Top Up
                </Button>

            </div>
        </div>    
    </section>
)
}

export default WalletInfo
