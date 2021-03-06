import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import Button from '../../base/Button'
import Input from '../../base/Input'
import MailIcon from './mail-icon.svg'
import PadlockIcon from './padlock-icon.svg'
import { useNavigate } from 'react-router-dom'
import '../../base/../../pages/Home/home.css'


const RightBoxLogin = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg , setErrorMsg]= useState("")

    const handleForm = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const handleLogin = () =>{
        setIsLoading(true)
        axios.post(`https://zwallet-dinda.herokuapp.com/users/login`,
        // axios.post(`http://localhost:5000/users/login`,
        {
        email: form.email,
        password: form.password
    })
        .then((res)=>{
            setIsLoading(false)
            const result = res.data.data[0]
            const token = result.token
            console.log(result);
            localStorage.setItem('auth', "1")
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
        })
        .catch((err)=>{
            setIsLoading(false)
            console.log(err.response)
            if(err.response.status === 403){
                setErrorMsg(err.response.data.message)
            }else{
                setErrorMsg('Internal server error, try again later')
            }
    
        })
    }

    // const handleLogin = ()=>{
    //     setIsLoading(true)
    //     if (form.email === 'admin@admin.com' && form.password === '123456'){
    //         setIsLoading(false)
    //         localStorage.setItem('auth', '1')
    //         navigate('/')
    //     }else{
    //         setIsLoading(false)
    //         setErrorMsg('You entered the wrong email/password')
    //     }
    // }

    const moveToRegister = ()=>{
        navigate('/register')
    }

    return (
        <section className="box box-right p-5">
        <main className="box-right-wrapper w-100 d-flex flex-column justify-content-between mx-auto">
            <h2 className="text-center w-100 text-secondary d-block d-lg-none">Login</h2>
            <h2 className="text-secondary w-100 d-none d-lg-block">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
            <p className="text-secondary w-100 text-center d-block d-lg-none">Login to your existing account to access
                all the features in Zwallet.</p>
            <p className="text-secondary w-100 d-none d-lg-block">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone?
                we cover all of that for you!</p>

            <form className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><img src={MailIcon} alt=''/></span>
                <Input 
                name="email" 
                value={form.email}
                onChange={handleForm} 
                type="text" 
                className="form-control" 
                placeholder="Enter your email" 
                aria-describedby="addon-wrapping"
                />
            </form>

            <form className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><img src={PadlockIcon} alt=''/></span>
                <Input 
                name="password" 
                value={form.password}
                onChange={handleForm} 
                type="password" 
                className="form-control" 
                placeholder="Enter your password" 
                aria-describedby="addon-wrapping"/>
            </form>

            <p className='link w-100 text-end text-secondary'>Forgot password?</p>

            <Button 
            isLoading={isLoading}
            onClick={handleLogin}
            className="btn btn-secondary">
                Login</Button>

            <p className='w-100 text-secondary text-center'>Dont have an account? <span className='link' onClick={moveToRegister}>Sign Up</span></p>
            {errorMsg && <h3 className="text-danger">{errorMsg}</h3>}
        </main>           
    </section>
)
}

export default RightBoxLogin
