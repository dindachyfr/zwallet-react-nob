import React from 'react'
import UserImage from './NangIs-icon.svg'
import Notification from './bell-icon.svg'

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <nav className="nav-bar-home bg-white d-flex shadow-sm">
        <div className="nav-wrapper-home w-100 mx-5 d-flex align-items-center">
                <h1 className="nav-left text-primary d-none d-lg-block w-50 justify-content-start">Zwallet</h1>
                <div className="nav-right d-flex justify-content-lg-end justify-content-between w-100 w-lg-50 align-items-between">                    
                <img src={UserImage} alt=''/>
                    <div className='d-none d-lg-block text-secondary mx-3'>
                        <h4>{user.name}</h4>
                        <h4>{user.phone_number}</h4>
                    </div>
                    <div className="d-block d-lg-none text-secondary mx-3">
                        <h4>Balance</h4>
                        <h4 className='text-white'>IDR {user.balance}</h4>
                        </div>
                    <img src={Notification} alt=''/>
                </div>
            </div>

    </nav>
    )
}

export default Navbar
