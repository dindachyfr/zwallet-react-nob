import axios from 'axios'
import React, { useState } from 'react'
import ReactCodeInput from 'react-code-input'
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom'
import Button from '../../base/Button'
import './pin.css'

const SetPinNew = () => {

    const props = {
        inputStyle: {
          fontFamily: 'monospace',
          margin:  '4px',
          MozAppearance: 'textfield',
          width: '4rem',
          borderRadius: '1rem',
          fontSize: '1rem',
          height: '4rem',
          paddingLeft: '7px',
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

    const navigate = useNavigate()
    const [pinValue, setPinValue] = useState (0)
    const user = JSON.parse(localStorage.getItem('user'))
    const handlePinChange = pinValue =>{
        setPinValue(pinValue)
    }
    console.log(pinValue);
    
    const handleSetPin = () =>{
        // axios.put(`https://zwallet-dinda.herokuapp.com/users/pin/${user.id}`, {    
        axios.put(`http://localhost:5000/users/pin/${user.id}`, {
                pin: pinValue
        })
        navigate('/profile')
    }
    
    return (
        <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5">
            <h3 className='my-3'>Change PIN</h3>
            <p className='my-5 w-50'>Type your new 6 digits PIN to use in ZWallet</p>

            <section className='w-100 h-50 d-flex justify-content-center'>
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
