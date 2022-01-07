import React from 'react'
import Income from './income-icon.svg'
import Expense from './expense-icon.svg'
import MenuCenterImage from './menu-center-icon.svg'
import '../../../pages/Home/home.css'


const TransactionInfo = () => {
    return (
        <section className="content-menu-home d-lg-block d-none  bg-white shadow-sm p-3 flex-grow-1">
        <div className="wrapper-content-menu-home d-flex flex-column h-100 justify-content-evenly">
            <div className="menu-upper-home d-flex justify-content-between px-3">
                <figure className='transition-btt'>
                    <img src={Income} alt=''/>
                    <h4>Income</h4>
                    <h3>IDR 2120000</h3>
                </figure>
       
                <figure className='transition-btt'>
                    <img src={Expense} alt=''/>
                    <h4>Expense</h4>
                    <h3>IDR 1602000</h3>
                </figure>

            </div>

            <figure className='d-flex justify-content-center'>
                <img src={MenuCenterImage} alt=''/>
            </figure>

        </div>
    </section>
)
}

export default TransactionInfo
