import React from 'react'
import InsertCurrentPIN from '../../components/module/ChangePin/InsertCurrentPIN'
import Footer from '../../components/module/Footer/Footer'
import Navbar from '../../components/module/Navbar/Navbar'
import SidebarMenu from '../../components/module/SidebarMenu/SidebarMenu'

const ChangePin = () => {
    return (
        <main className="con-home container-fluid d-flex flex-column bg-light p-0 justify-content-between">
        <Navbar/>  
        <main class="wrapper-content-home d-flex my-3 mx-lg-5 flex-fill">
        <div class="container-content-home h-100 w-100 d-flex">
            <SidebarMenu/>
            <InsertCurrentPIN/>                        
        </div>                    
        </main>
        <Footer/>
    </main>
)
}

export default ChangePin
