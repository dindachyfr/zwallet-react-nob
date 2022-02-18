import React, { useEffect, useState } from 'react'
import ReactCodeInput from 'react-code-input'
import Button from '../../base/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { postPIN } from '../../../redux-state/action/postPIN';


const InsertCurrentPIN = () => {
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
    const [errorMsg, setErrorMsg] = useState("")
        const handlePinChange = pinValue =>{
            setPinValue(pinValue)
        }
        console.log(pinValue);

    const dispatch = useDispatch()
    const postPINData = useSelector((state)=> state.PostPIN)
    console.log(postPINData);

    const continueChangePIN = () => {
        dispatch(postPIN(pinValue, navigate, setErrorMsg))
        // .then(res=> navigate('/profile/managePIN/set-new'))
        // .catch(err => setErrorMsg("You entered the wrong PIN"))
    }    
    
    return (
        <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5">
            <h3 className='my-3'>Change PIN</h3>
            <p className='my-5 w-50'>Enter your current 6 digits PIN below to continue to the next step</p>

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
            onClick= {continueChangePIN}
            >
                Confirm</Button>
                </section>
                {errorMsg && <h3 className='text-danger m-3 w-100 d-flex justify-content-center m-3'>{errorMsg}</h3>}

        </section>
        )
}

export default InsertCurrentPIN
