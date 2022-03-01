import React, { Fragment, useEffect, useRef } from 'react'
import Footer from '../../components/module/Footer/Footer'
import Navbar from '../../components/module/Navbar/Navbar'
import SidebarMenu from '../../components/module/SidebarMenu/SidebarMenu'
import TransactionHistory from '../../components/module/TransactionHistory/TransactionHistory'
import TransactionInfo from '../../components/module/TransactionInfo/TransactionInfo'
import WalletInfo from '../../components/module/WalletInfo/WalletInfo'
import './home.css'
import socket from '../../helper/socket'

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const UID = user.wallet_id

    useEffect(()=> {
        socket.emit("wallet ID", UID)
    },[])
    
    return (
        <Fragment>
            <main className="con-home container-fluid d-flex flex-column bg-light p-0 justify-content-between">
                <Navbar/>  
                <main class="wrapper-content-home d-flex my-3 mx-lg-5 flex-fill">
                <div class="container-content-home h-100 w-100 d-flex">
                    <SidebarMenu/>
                    <section class="wrapper-balance-home w-100 w-lg-75 d-flex flex-column justify-content-between">
                        <WalletInfo/> 
                        <section class="wrapper-content-lower-home h-75 d-flex justify-content-between pt-3">
                            <TransactionInfo/>
                            <TransactionHistory/>
                            </section>                       
                        </section>                        
                        </div>                    
                </main>
                <Footer/>
            </main>
        </Fragment>
    )
}

export default Home
