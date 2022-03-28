/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Button from '../../base/Button'
import '../../../pages/Home/home.css'
import Transfer from './transfer-icon.png'
import TopUp from './transfer-icon.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux-state/action/profile';
import { getWallet } from '../../../redux-state/action/wallet'
import socket from '../../../helper/socket'

const WalletInfo = () => {
    const dispatch = useDispatch()
    const profileData = useSelector((state) => state.Profile)
    const walletData = useSelector((state) => state.Wallet)
    useEffect(() => {
        dispatch(getProfile())
        dispatch(getWallet())
    }, [])


    const navigate = useNavigate()

    const moveToTransfer = () => {
        navigate('/transfer')
    }

    return (
        <section className="balance-box-home shadow-sm h-25">
            <div className="wrapper-balance-home d-block d-lg-flex mx-0 mx-3 p-3 justify-content-between w-100">
                <div className="balance-left-home d-flex flex-column justify-content-between text-white">
                    <h3>Balance</h3>
                    <h1>IDR {walletData.data.balance}</h1>
                    <h3>{profileData.data.phone_number}</h3>
                </div>

                <div className="balance-right-home d-lg-flex d-none flex-lg-column align-items-center justify-content-between text-white pe-lg-5 pb-3">
                    <Button type="button" className="btn btn-outline-lg-light btn-outline-home ms-lg-0 p-3 mb-lg-2" onClick={moveToTransfer}>
                        <img src={Transfer} alt='' />
                        Transfer
                    </Button>
                    <Button type="button" className="btn ms-lg-0 ms-1 btn-outline-home p-3">
                        <img src={TopUp} alt='' />
                        Top Up
                    </Button>

                </div>
            </div>
            <div className="d-lg-none d-flex w-100 p-3 my-3 justify-content-between">
                <Button type="button" className="btn btn-outline-lg-light btn-mobile ms-lg-0 p-3 mb-lg-2" onClick={moveToTransfer}>
                    <img src={Transfer} alt='' />
                    Transfer
                </Button>
                <Button type="button" className="btn ms-lg-0 ms-1 btn-mobile p-3">
                    <img src={TopUp} alt='' />
                    Top Up
                </Button>

            </div>
        </section>
    )
}

export default WalletInfo
