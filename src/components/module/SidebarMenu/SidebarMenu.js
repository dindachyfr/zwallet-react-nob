import React from 'react'
import '../../../pages/Home/home.css'
import Logout from './logout-icon.png'
import Transfer from './topup-icon.png'
import TopUp from './topup-icon.png'
import Menu from './dashboard-icon.png'
import { useNavigate } from 'react-router-dom'

const SidebarMenu = () => {

    const navigate = useNavigate()
    
    const handleLogout = ()=>{
        localStorage.removeItem('auth')
        localStorage.removeItem('user')
        localStorage.removeItem('wallet')
        navigate('/login')
    }

    const moveToHome = ()=>{
        navigate('/')
    }

    const moveToTransfer = ()=>{
        navigate('/transfer')
    }

    return (
        <section className="menu-left-home w-25 d-lg-flex me-3 bg-white shadow-sm d-none">
        <div className="wrapper-menu-left-home w-75 h-75 m-auto d-flex flex-column justify-content-between">
            <figure className='d-flex w-100 change-home' onClick={moveToHome}>
                <img src={Menu} alt=''/>
                <h4 className= "ms-5">Dashboard</h4>
            </figure>

            <figure className='d-flex w-100 change-home' onClick={moveToTransfer}>
                <img src={Transfer} alt=''/>
                <h4 className= "ms-5">Transfer</h4>
            </figure>

            <figure className='d-flex w-100 change-home'>
                <img src={TopUp} alt=''/>
                <h4 className= "ms-5">Top Up</h4>
            </figure>

            <figure className='d-flex w-100 change-home' onClick={handleLogout}>
            <img src={Logout} alt=''/>
                <h4 className= "ms-5">Log Out</h4>
            </figure>


        </div>
    </section>
)
}

export default SidebarMenu
