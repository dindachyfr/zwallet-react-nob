import React, { useEffect, useRef, useState } from 'react'
import './modalNotif.css'
import Transfer from './arrow-red.svg'
import Transferred from './arrow-green.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getNotifTransfer } from '../../../redux-state/action/notifTransfer';
import { getNotif } from '../../../redux-state/action/getNotif'
import socket from '../../../helper/socket'

const NotifModal = () => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))
    const wallet_id = user.wallet_id
    const notifTransferData = useSelector((state) => state.NotifTransfer)
    const notifData = useSelector((state) => state.GetNotif)
    const [notif, setNotif] = useState([])
    const [notif1, setNotif1] = useState([])
    
        socket.on("notif transaksi", (notification1) => {
            setNotif1([...notif1, {
                amount: notification1.amount,
                sender: notification1.sender,
                receiver: notification1.receiver
            }])
        console.log(notification1);
        })

        socket.on("notif admin", (notification) => {
            setNotif([...notif, { 
                title: notification.title, 
                message: notification.message, 
                image: notification.image }])
        })

    useEffect(() => {
        dispatch(getNotifTransfer(wallet_id))
        dispatch(getNotif())
    }, [])

    const displayNotif = () => {
        return notif.map((notif, index) => {
            return(
                <div
                class='recipient-modal d-flex justify-content-between align-items-between shadow-sm my-3'
                key={index}
            >
                <div class="recipient-modal d-flex p-3">
                    <img src={notif.image} className='pic-notif' alt='' />
                    <div className='text-secondary ms-3'>
                        <h6>{notif.title}</h6>
                        <p className='text-secondary'>{notif.message}</p>
                    </div>
                </div>
            </div>

            )
        })
    }

    const displayNotif1 = () => {
        return notif1.map((notif, index) => {
            return (
                <div 
                key= {index}
                class='recipient-modal d-flex justify-content-between align-items-between shadow-sm my-3'>
                            <div class="recipient-modal d-flex p-3">
                                <img src={Transferred} alt='' />
                                <div className='text-secondary ms-3'>
                                    <p className='text-secondary'>Transferred from {notif.sender}</p>
                                    <h6>IDR {notif.amount}</h6>
                                </div>
                            </div>
                    </div>
                )
        })
    }
    return (
        <main class="modal-notif bg-white p-3 m-3">
            <h4 className='mt-3'>Transfer Notification</h4>
            <div className='upper-modal d-flex flex-column'>
                {displayNotif1()}
                {notifTransferData.data.map((data) =>
                    <div class='recipient-modal d-flex justify-content-between align-items-between shadow-sm my-3'>
                        {data.sender_wallet_id === wallet_id ?
                            <div class="recipient-modal d-flex p-3">
                                <img src={Transfer} alt='' />
                                <div className='text-secondary ms-3'>
                                    <p className='text-secondary'>Transfer to {data.receiver}</p>
                                    <h6>IDR {data.amount}</h6>
                                </div>
                            </div> :
                            <div class="recipient-modal d-flex p-3">
                                <img src={Transferred} alt='' />
                                <div className='text-secondary ms-3'>
                                    <p className='text-secondary'>Transferred from {data.sender}</p>
                                    <h6>IDR {data.amount}</h6>
                                </div>
                            </div>
                        }
                    </div>
                )
                }
            </div>
            <hr />
            <h4 className='mt-3'>Global Notification</h4>
            <div className='upper-modal d-flex flex-column'>
                {displayNotif()}
                {
                    notifData.data.map((data) =>
                        <div 
                        class='recipient-modal d-flex justify-content-between align-items-between shadow-sm my-3'>
                            <div class="recipient-modal d-flex p-3">
                                <img src={data.image} className='pic-notif' alt='' />
                                <div className='text-secondary ms-3'>
                                    <h6>{data.title}</h6>
                                    <p className='text-secondary'>{data.message}</p>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </main>
    )
}

export default NotifModal