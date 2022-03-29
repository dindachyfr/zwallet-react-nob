import React from 'react'
import Footer from '../../components/module/Footer/Footer'
import ManagePhone2 from '../../components/module/ManagePhone2/ManagePhone2'
import Navbar from '../../components/module/Navbar/Navbar'
import SidebarMenu from '../../components/module/SidebarMenu/SidebarMenu'

const ManagePhone = () => {
    return (
        <main className="con-home container-fluid d-flex flex-column bg-light p-0 justify-content-between">
        <Navbar/>  
        <main class="wrapper-content-home d-flex my-lg-3 mx-lg-5 flex-fill">
        <div class="container-content-home h-100 w-100 d-flex">
            <SidebarMenu/>
            <ManagePhone2/>                        
        </div>                    
        </main>
        <Footer/>
    </main>
    )
}

export default ManagePhone
