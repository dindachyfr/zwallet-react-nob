import axios from 'axios'
import React, { useState } from 'react'
import PinInput from 'react-pin-input'
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom'
import Button from '../../base/Button'
import './pin.css'

const SetPinNew = () => {

    const navigate = useNavigate()
    const [pinValue, setPinValue] = useState (0)
    //     const [pinData, setPinData] = useState({
    //         name: '',
    //         phone_number: '',
    //         email: '',
    //         pin: 0,
    //         wallet_id: 0,
    //         balance: 0
    // })
        // eslint-disable-next-line no-unused-vars
    const user = JSON.parse(localStorage.getItem('user'))
    const handlePinChange = pinValue =>{
        setPinValue(pinValue)
    }
    console.log(pinValue);
    
    const handleSetPin = () =>{
        axios.put(`https://zwallet-dinda.herokuapp.com/users/pin/${user.id}`, {    
        // axios.put(`http://localhost:5000/users/pin/${pins.insertId}`, {
                pin: pinValue
        })
        navigate('/profile')
    }
    
    return (
        <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5">
            <h3 className='my-3'>Change PIN</h3>
            <p className='my-5 w-50'>Type your new 6 digits PIN to use in ZWallet</p>

            <section className='w-100 h-50 d-flex justify-content-center'>
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

            </section>

            <section className='w-100 d-flex justify-content-center'>
            <Button 
            className="btn btn-secondary w-50 p-3"
            onClick = {handleSetPin}
            >
            Change PIN</Button>
                </section>
        </section>
    )
}

export default SetPinNew
