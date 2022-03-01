import React from 'react'
import '../../../pages/Home/home.css'
import Logout from './log-out.svg'
import Transfer from './arrow-up.svg'
import TopUp from './plus.svg'
import Menu from './grid.svg'
import Admin from './user.svg'
import { useNavigate } from 'react-router-dom'

const SidebarMenu = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))
    const handleLogout = ()=>{
        localStorage.clear()

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

            {
                user.role === "admin" &&
                <figure className='d-flex w-100 change-home'
                onClick={() => navigate('/admin')}>
                <img src={Admin} alt=''/>
                <h4 className= "ms-5">Admin</h4>
            </figure>
            }

            <figure className='d-flex w-100 change-home' onClick={handleLogout}>
            <img src={Logout} alt=''/>
                <h4 className= "ms-5">Log Out</h4>
            </figure>


        </div>
    </section>
)
}

export default SidebarMenu
