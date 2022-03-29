import React, { useEffect, useState } from 'react'
import '../../../pages/Home/home.css'
import Logout from './log-out.svg'
import Transfer from './arrow-up.svg'
import TopUp from './plus.svg'
import Menu from './grid.svg'
import Admin from './user.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import LogoutModal from './Modal'

const SidebarMenu = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const [home,setHome] = useState(false)
    const [transfer,setTransfer] = useState(false)
    const [topup,setTopup] = useState(false)
    const [admin,setAdmin] = useState(false)
    const [modal,setModal] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'))
    const handleLogout = ()=>{
        localStorage.clear()

        navigate('/login')
    }

    const handleModal = () => setModal(!modal)

    const moveToHome = ()=>{
        navigate('/')
    }

    const moveToTransfer = ()=>{
        navigate('/transfer')
    }

    const Jalan = () => {
        if(pathname.includes("/")){
            setHome(true)
            setAdmin(false)
            setTopup(false)
            setTransfer(false)
        }
        if(pathname.includes("/transfer")){
            setTransfer(true)
            setAdmin(false)
            setTopup(false)
            setHome(false)
        }
        if(pathname.includes("/admin")){
            setTransfer(false)
            setAdmin(true)
            setTopup(false)
            setHome(false)
        }
        if(pathname.includes("/history")){
            setTransfer(true)
            setAdmin(false)
            setTopup(false)
            setHome(false)
        }
        if(pathname.includes("/profile")){
            setTransfer(false)
            setAdmin(false)
            setTopup(false)
            setHome(false)
        }
    }
    useEffect(()=>{
        Jalan()
    }, [pathname])

    return (
        <section className="menu-left-home w-25 d-lg-flex me-3 bg-white shadow-sm d-none">
        <div className="wrapper-menu-left-home w-75 h-75 m-auto d-flex flex-column justify-content-between">
            <figure className={home? 'd-flex w-100 change-home2' : 'd-flex w-100 change-home'} onClick={moveToHome}>
                <img src={Menu} alt=''/>
                <h4 className= "ms-5">Dashboard</h4>
            </figure>

            <figure className={transfer? 'd-flex w-100 change-home2' : 'd-flex w-100 change-home'} onClick={moveToTransfer}>
                <img src={Transfer} alt=''/>
                <h4 className= "ms-5">Transfer</h4>
            </figure>

            <figure className='d-flex w-100 change-home'>
                <img src={TopUp} alt=''/>
                <h4 className= "ms-5">Top Up</h4>
            </figure>

            {
                user.role === "admin" &&
                <figure className={admin? 'd-flex w-100 change-home2' : 'd-flex w-100 change-home'}
                onClick={() => navigate('/admin')}>
                <img src={Admin} alt=''/>
                <h4 className= "ms-5">Admin</h4>
            </figure>
            }

            <figure className='d-flex w-100 change-home' onClick={handleModal}>
            <img src={Logout} alt=''/>
                <h4 className= "ms-5">Log Out</h4>
            </figure>


        </div>
        {modal && <LogoutModal handleModal={handleModal} handleLogout={handleLogout}/> }
    </section>
)
}

export default SidebarMenu
