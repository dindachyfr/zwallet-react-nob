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
      margin: '4px',
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
      margin: '4px',
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
  const [pinValue, setPinValue] = useState(0)
  const [errorMsg, setErrorMsg] = useState("")
  const handlePinChange = pinValue => {
    setPinValue(pinValue)
  }
  console.log(pinValue);

  const dispatch = useDispatch()
  const postPINData = useSelector((state) => state.PostPIN)
  console.log(postPINData);

  const continueChangePIN = () => {
    dispatch(postPIN(pinValue, navigate, setErrorMsg))
    // .then(res=> navigate('/profile/managePIN/set-new'))
    // .catch(err => setErrorMsg("You entered the wrong PIN"))
  }

  return (
    <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-3 p-lg-5">
      <div class="d-flex d-lg-none align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
          class="bi bi-arrow-left d-block d-lg-none text-secondary"
          viewBox="0 0 16 16"
          onClick={() => navigate(-1)}>
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>
        <h3 class="text-secondary pt-lg-3 p-3 p-lg-0">Change PIN</h3>
      </div>
      <h3 className='my-3 d-lg-block d-none'>Change PIN</h3>
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
          className="btn btn-login pointer w-50 p-3"
          disabled={!pinValue || pinValue.length < 6}
          onClick={continueChangePIN}
        >
          Confirm</Button>
      </section>
      {errorMsg && <h3 className='text-danger m-3 w-100 d-flex justify-content-center m-3'>{errorMsg}</h3>}

    </section>
  )
}

export default InsertCurrentPIN
