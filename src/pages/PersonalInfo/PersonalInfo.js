// import axios from 'axios'
import React from 'react'
import Footer from '../../components/module/Footer/Footer'
import Navbar from '../../components/module/Navbar/Navbar'
import PersonalInfo2 from '../../components/module/Profile/PersonalInfo'
import SidebarMenu from '../../components/module/SidebarMenu/SidebarMenu'

const PersonalInfo = () => {

    return (
        <main className="con-home container-fluid d-flex flex-column bg-light p-0 justify-content-between">
        <Navbar/>  
        <main class="wrapper-content-home d-flex my-3 mx-lg-5 flex-fill">
        <div class="container-content-home h-100 w-100 d-flex">
            <SidebarMenu/>
            <PersonalInfo2/>                        
        </div>                    
        </main>
        <Footer/>
    </main>
)
}

export default PersonalInfo
