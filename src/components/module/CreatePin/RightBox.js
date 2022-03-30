// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import '../../base/../../pages/Home/home.css'
import Button from '../../base/Button'
import ReactCodeInput from 'react-code-input'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { putPIN } from '../../../redux-state/action/putPIN';

const RightBox = () => {

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
    const pins = JSON.parse(localStorage.getItem('pins'))
    const handlePinChange = pinValue => {
        setPinValue(pinValue)
    }
    console.log(pinValue);

    const dispatch = useDispatch()
    const putPINData = useSelector((state) => state.PutPIN)
    console.log(putPINData);


    // const handleSetPin = () =>{
    //     // axios.put(`https://zwallet-dinda.herokuapp.com/users/pin/${pins.insertId}`, {    
    //     axios.put(`http://localhost:5000/users/pin/${pins[0].insertId}`, {
    //             pin: pinValue
    //     })
    //     navigate('/login')
    //     setTimeout(()=>{
    //         localStorage.clear()
    //     },
    //         1500)
    // }

    const handleSetPin = () => {
        dispatch(putPIN(pinValue, navigate, pins[0].insertId))
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

                <Button
                    isLoading={putPINData.loading}
                    disabled={!pinValue || (pinValue.length < 6)}
                    onClick={handleSetPin}
                    className="btn btn-login pointer"
                >
                    Login</Button>



            </main>
        </section>
    )
}

export default RightBox
