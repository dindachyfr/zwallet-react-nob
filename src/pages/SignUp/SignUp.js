import React from 'react'
import LeftBox from '../../components/module/LoginRegister/LeftBox/LeftBox'
import RightBox from '../../components/module/SignUp/RightBox'

const SignUp = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
            <div className="col-lg-6">
                <LeftBox/>
                </div>
            <div className="col-12 col-lg-6">
                <RightBox/>
                </div>
            </div>
        </div>
    )
}

export default SignUp
