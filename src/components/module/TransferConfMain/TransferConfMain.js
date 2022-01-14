import React, { useEffect, useState } from 'react'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './modal.css'
import PinInput from 'react-pin-input'

const TransferConfMain = () => {

    const receiver = JSON.parse(localStorage.getItem('receiver'))
    const user = JSON.parse(localStorage.getItem('user'))
    const transaction = JSON.parse(localStorage.getItem('transaction'))

    const navigate = useNavigate()
    const [errorMsg , setErrorMsg]= useState("")
    const [receipt, setReceipt] = useState({
        receiver_wallet_id: 0,
        receiver: '',
        phone_number: '',
        amount: 0,
        date: '',
        notes: ''
    })

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

    useEffect(()=>{
        axios.get(`https://zwallet-dinda.herokuapp.com/transaction/${transaction.insertId}`)
        // axios.get(`http://localhost:5000/transaction/${transaction.insertId}`)
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
        axios.put(`https://zwallet-dinda.herokuapp.com/transaction/transfer/confirm/${user.id}/${user.wallet_id}/${transaction.insertId}`, {
        // axios.put(`http://localhost:5000/transaction/transfer/confirm/${user.id}/${user.wallet_id}/${transaction.insertId}`, {

            pin: pinValue
        }).then((res) => {
            navigate('/')
            setTimeout(()=>{
                localStorage.removeItem('receiver')
                localStorage.removeItem('transaction')
                localStorage.removeItem('receipt')
            },
                1500)
            })
            .catch((err)=>{
                setErrorMsg("You entered the wrong PIN!")
            })

    }

    const [pinValue, setPinValue] = useState (0)
    //     const [pinData, setPinData] = useState({
    //         name: '',
    //         phone_number: '',
    //         email: '',
    //         pin: 0,
    //         wallet_id: 0,
    //         balance: 0
    // })
        const handlePinChange = pinValue =>{
            setPinValue(pinValue)
        }
        console.log(pinValue);
    


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
            <PinInput 
            length={6} 
            initialValue=""
            value={pinValue}
            // secret 
            onChange={handlePinChange} 
            type="numeric" 
            inputMode="number"
            style={{padding: '10px'}}  
            inputStyle={{borderColor: 'red'}}
            inputFocusStyle={{borderColor: 'blue'}}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
            <div class="button-wrapper w-100 d-flex justify-content-end mt-5">
            {errorMsg && <h4 className="text-danger">{errorMsg}</h4>}
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
