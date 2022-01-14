import React, { useState } from 'react'
import PinInput from 'react-pin-input'
import Button from '../../base/Button'
import './pin.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const InsertCurrentPIN = () => {
    const navigate = useNavigate()
    const [pinValue, setPinValue] = useState (0)
    const [errorMsg, setErrorMsg] = useState("")
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

        const continueChangePIN = () =>{
            axios.post(`https://zwallet-dinda.herokuapp.com/users/pinconfirm/${user.id}`, {
                pin: pinValue
            }).then ((res)=>{
                navigate('/profile/managePIN/set-new')
            })
            .catch((err)=>{
                setErrorMsg("You entered the wrong PIN")
                // navigate('/profile')
            })
            console.log(errorMsg);

        }
    
    return (
        <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-5">
            <h3 className='my-3'>Change PIN</h3>
            <p className='my-5 w-50'>Enter your current 6 digits PIN below to continue to the next step</p>

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
            onClick= {continueChangePIN}
            >
                Confirm</Button>
                </section>
                {errorMsg && <h3 className='text-danger m-3 w-100 d-flex justify-content-center m-3'>{errorMsg}</h3>}

        </section>
        )
}

export default InsertCurrentPIN
