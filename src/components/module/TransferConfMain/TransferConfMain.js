import React, { useEffect, useState } from 'react'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import { useNavigate } from 'react-router-dom'
import './modal.css'
import ReactCodeInput from 'react-code-input'
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from '../../../redux-state/action/transactionByID';
import { getWallet } from '../../../redux-state/action/wallet'
import { putTransaction } from '../../../redux-state/action/putTransaction'
import socket from '../../../helper/socket'

const TransferConfMain = () => {

    const props = {
        inputStyle: {
          fontFamily: 'monospace',
          margin:  '4px',
          MozAppearance: 'textfield',
          width: '4rem',
          borderRadius: '1rem',
          fontSize: '1rem',
          height: '4rem',
          backgroundColor: 'white',
          color: 'grey',
          textAlign: 'center',
          border: '1px solid #aaa5a5'
        },
        inputStyleInvalid: {
          fontFamily: 'monospace',
          margin:  '4px',
          MozAppearance: 'textfield',
          width: '15px',
          borderRadius: '3px',
          fontSize: '14px',
          height: '26px',
          paddingLeft: '7px',
          backgroundColor: 'black',
          color: 'red',
          border: '1px solid red'
        }
      }

    const receiver = JSON.parse(localStorage.getItem('receiver'))
    const transaction = JSON.parse(localStorage.getItem('transaction'))
    const transID = transaction.data.insertId
    const navigate = useNavigate()
    const [errorMsg , setErrorMsg]= useState("")
    const [displayModal, setDisplayModal] = useState(false)

    const handleModalDisplay = () => {
        if(!displayModal){
            setDisplayModal(true)
        }
    }

    const handleModalDisplayNot = () => {
        if (displayModal){
            setDisplayModal(false)
        }
    }

    const dispatch = useDispatch()
    const receiptData = useSelector((state)=> state.TransactionByID)
    const walletData = useSelector((state) => state.Wallet)
    console.log(receiptData);

    useEffect(()=>{
      dispatch(getTransaction(transaction.data.insertId))
      dispatch(getWallet())
    }, [])

    const handleConfirm = () => {
        dispatch(putTransaction({pinValue, navigate, setErrorMsg, transID}))
        socket.emit("notif transaksi", {
            amount: receiptData.data.amount, 
            sender: receiptData.data.sender,
        receiver: receiptData.data.receiver_wallet_id})
    }

    const [pinValue, setPinValue] = useState (0)
        const handlePinChange = pinValue =>{
            setPinValue(pinValue)
        }
        console.log(pinValue);
    


    return (
        <section class="trans-history h-100 w-lg-75 w-100 d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-3">               
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
                            <h5>{receiver.name}</h5>
                            {/* <h5>082783826409</h5> */}
                            <h5>{receiver.phone_number}</h5>
                        </div>
                    </div>
                </div>
            </div>
        <div className='d-flex flex-column justify-content-between h-75 py-lg-0 py-3'>
        <div class="history-lower-h h-100 d-flex flex-column justify-content-between px-lg-5 px-3 pt-lg-1 pt-5">
                    <h4 class='text-secondary d-none d-lg-block pt-3'>Details</h4>
                    <div class="d-flex flex-lg-column flex-row justify-content-between w-100">
                        <div class='recipient inner shadow-sm my-md-1 mx-lg-0 mx-1'>
                            <div class="recipient p-2">
                                <p class='text-secondary'>Amount</p>
                                <h4 class='text-secondary'>IDR {receiptData.data.amount}</h4>
                             </div>
                        </div>
                        <div class='recipient inner shadow-sm my-md-1 mx-lg-0 mx-1'>
                            <div class="recipient p-2">
                                <p class='text-secondary'>Balance</p>
                                <h4 class='text-secondary'>{walletData.data.balance}</h4>
                             </div>
                        </div>
                        </div>

                        <div class="d-flex flex-lg-column flex-row justify-content-between w-100">
                            <div class='recipient inner2 shadow-sm my-md-1 mx-lg-0 mx-1'>
                                <div class="recipient p-2">
                                    <p class='text-secondary'>Date</p>
                                    <h4 class='text-secondary'>{receiptData.data.date}</h4>
                                </div>
                            </div>
                    </div>
                    <div class='recipient shadow-sm my-md-1'>
                        <div class="recipient p-2">
                            <p class='text-secondary'>Notes</p>
                            <h4 class='text-secondary'>{receiptData.data.notes}</h4>
                         </div>
                    </div>
                </div>
                <div class='continue d-flex justify-content-end py-1 mx-3 mx-0'>
                    <button 
                    class='continue-button button-h'
                    onClick={handleModalDisplay}
                    >Continue</button>
                </div>
        </div>
                {displayModal &&
                 <main class="con container-fluid d-flex flex-column p-0 justify-content-between">
        <div class="modal-pin bg-light w-25 h-50 p-3 m-3">
            <div class="top-modal d-flex justify-content-between m-3">
              <h4>Enter PIN to Transfer</h4>
              <h3 class="close-modal" onClick={handleModalDisplayNot}>x</h3>
              </div>
            <p class="text-secondary m-3 mb-5">Enter your 6 digits PIN to  confirm the transaction</p>
            <ReactCodeInput 
            fields={6} 
            initialValue=""
            value={pinValue}
            // secret 
            onChange={handlePinChange} 
            type="number" 
            inputMode="number"
            {...props}
            />
            <div class="button-wrapper w-100 d-flex justify-content-end mt-5">
            {errorMsg && <h6 className="text-danger w-100">{errorMsg}</h6>}
              <button 
              class='continue-button mt-5'
              onClick={handleConfirm}
              >Continue</button>
          </div>
        </div>  
      </main>
       }

        </section>
        )
}

export default TransferConfMain
