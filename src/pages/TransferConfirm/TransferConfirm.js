import React, { Fragment } from 'react'
import Footer from '../../components/module/Footer/Footer'
import Navbar from '../../components/module/Navbar/Navbar'
import SidebarMenu from '../../components/module/SidebarMenu/SidebarMenu'
import TransferConfMain from '../../components/module/TransferConfMain/TransferConfMain'

const TransferConfirm = () => {
    return (
        <Fragment>
            <main className="con-home container-fluid d-flex flex-column bg-light p-0 justify-content-between">
                <Navbar/>  
                <main class="wrapper-content-home d-flex my-lg-3 mx-lg-5 flex-fill">
                <div class="container-content-home h-100 w-100 d-flex">
                    <SidebarMenu/>
                    <TransferConfMain/>
                </div>
                </main>
                <Footer/>
            </main>
        </Fragment>
    )
}

export default TransferConfirm
