import React from 'react'
import Phone from './phone-icon.svg'
import './LeftBox.css'

const LeftBox = () => {
    return (
        <section className="box box-left d-none d-lg-block">
            <main className="h-100 w-100 d-flex flex-column align-items-center">
                <h2 className="text-light text-start w-100 mb-0">Zwallet</h2>
                <div className="banner-phone-wrapper">
                    <img className='banner-phone-auth' src={Phone} alt='' />
                </div>
                <h3 className="text-light w-100 text-start">App that Covering Banking Needs.</h3>
                <h5 className="text-light w-100 text-start my-1 fw-light">Zwallet is an application that focussing in banking needs for all users in the world.</h5>
                <h6 className="text-light w-100 text-starts fw-light">Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</h6>
            </main>
        </section>
    )
}

export default LeftBox
