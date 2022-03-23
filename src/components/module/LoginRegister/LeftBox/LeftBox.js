import React from 'react'
import Phone from './phone-icon.svg'
import './LeftBox.css'

const LeftBox = () => {
    return (
        <section className="box box-left d-none d-lg-block">
        <main className="h-100 w-100 d-flex flex-column align-items-center">
            <h2 className="text-light text-start w-100 mb-3">Zwallet</h2>
            <img className='w-50vw' src={Phone} alt=''/>
            <h1 className="text-light w-100 text-start mb-3">App that Covering Banking Needs.</h1>
            <h4 className="text-light w-100 text-start mb-3">Zwallet is an application that focussing in banking needs for all users in the world.</h4> 
            <h5 className="text-light w-100 text-start ">Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</h5>
        </main>
    </section>
)
}

export default LeftBox
