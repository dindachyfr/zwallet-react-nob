import React, { useEffect, useState } from 'react'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import Input from '../../base/Input'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../redux-state/action/profile';
import { getWallet } from '../../../redux-state/action/wallet'
import { topup } from '../../../redux-state/action/topup'
import Button from '../../base/Button'

const Topup = () => {
    const navigate = useNavigate()
    const [amount, setAmount] = useState(null)

    const handleForm = (e) => {
        setAmount(JSON.parse(e.target.value))
        console.log(amount);
    }

    const dispatch = useDispatch()
    const receiverData = useSelector((state) => state.Profile)
    const walletData = useSelector((state) => state.Wallet)
    console.log(walletData);
    useEffect(() => {
        dispatch(getProfile())
        dispatch(getWallet())
    }, [])

    const handleTopup = () => {
        dispatch(topup({
            id: walletData.data.id,
            amount,
            navigate
        })
        )
    }

    return (
        <section className="trans-history h-100 w-lg-75 w-100 d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-3">
            <div className="history-upper-h2 d-flex flex-column px-lg-5 px-3 py-lg-0 py-3 w-100">
                <div className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-arrow-left d-block d-lg-none text-white"
                        viewBox="0 0 16 16"
                        onClick={() => navigate(-1)}>
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>

                    <h3 className="text-secondary pt-lg-3 p-3 p-lg-0 title-history">Topup to</h3>
                </div>
                <div class='recipient d-flex justify-content-between align-items-between shadow-sm py-1'>
                    <div class="d-flex w-100 ms-3 py-3">
                        <img src={UserImage} alt='' />
                        <div className='text-secondary ms-3'>
                            {/* <h5>Cahyono</h5> */}
                            <h5>{receiverData.data.name}</h5>
                            {/* <h5>082783826409</h5> */}
                            <h5>{receiverData.data.phone_number}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="history-lower h-100 d-flex flex-column justify-content-between px-lg-5 px-3 pt-5">
                <p className='text-secondary w-50 d-none d-lg-block'>Type the amount you want to topup and then
                    press continue to the next steps.</p>
                <p className='text-secondary w-100 d-block d-lg-none'>Type the amount you want to topup and then
                    press continue to the next steps.</p>

                <div className='mx-auto'>
                    <Input
                        name="amount"
                        value={amount}
                        onChange={handleForm}
                        className='input-amount bg-transparent'
                        placeholder="0.00"
                        autoFocus
                        type="number" />
                </div>
                <h5 className='text-secondary mx-auto'>IDR {walletData.data.balance} Available</h5>
                <div className='input-notes mx-auto'>

                </div>
                <div className='continue d-flex justify-content-end pb-3'>
                    <Button
                        className='btn continue-button2 pointer'
                        disabled={!amount || amount<0}
                        onClick={handleTopup}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Topup
