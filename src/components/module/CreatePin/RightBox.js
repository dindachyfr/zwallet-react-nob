// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import '../../base/../../pages/Home/home.css'
import Button from '../../base/Button'
import PinInput from 'react-pin-input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const RightBox = () => {
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
    const pins = JSON.parse(localStorage.getItem('pins'))
    const handlePinChange = pinValue =>{
        setPinValue(pinValue)
    }
    console.log(pinValue);

// useEffect(()=>{
//     axios.get(`http://localhost:5000/users/${pins.insertId}`)
//     .then((res)=>{
//         const result = res.data.data[0]
//         setPinData(result)
//         console.log(pinData);
//     })
//     .catch((err)=>{
//         console.log(err.response);
//     })
// })

const handleSetPin = () =>{
    axios.put(`https://zwallet-dinda.herokuapp.com/users/pin/${pins.insertId}`, {    
    // axios.put(`http://localhost:5000/users/pin/${pins.insertId}`, {
            pin: pinValue
    })
    navigate('/login')
    setTimeout(()=>{
        localStorage.clear()
    },
        1500)
}

    return (
        <section className="box box-right p-5">
        <main className="box-right-wrapper d-flex flex-column justify-content-between mx-auto">
            <h2 className="text-center w-100 text-secondary d-block d-lg-none">Sign Up</h2>
            <h2 className="text-secondary w-100 d-none d-lg-block">Secure Your Account, Your Wallet, and Your Data 
            with 6 Digits PIN You Created Yourself</h2>
            <p className="text-secondary w-100 text-center d-block d-lg-none">Create your own PIN.</p>
            <p className="text-secondary w-100 d-none d-lg-block">Create 6 digits pin to secure all your money and you data in 
            Zwallet app. Keep it secret and don't tell anyone about your ZWallet password and PIN</p>

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

            <Button 
            className="btn btn-secondary"
            onClick={handleSetPin}>
                Confirm</Button>



        </main>           
    </section>
    )
}

export default RightBox
