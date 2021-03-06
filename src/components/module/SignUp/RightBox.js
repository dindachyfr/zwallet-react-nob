import React, { useState } from 'react'
import axios from 'axios'
import MailIcon from '../Login/mail-icon.svg'
import PadlockIcon from '../Login/padlock-icon.svg'
import UserIcon from './username-icon.svg'
import Input from '../../base/Input'
import Button from '../../base/Button'
import '../../base/../../pages/Home/home.css'
import { useNavigate } from 'react-router-dom'

const RightBox = () => {

    const [form,setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleForm = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
        console.log(form);
      }

    const handleRegister = (e)=>{
    e.preventDefault()
    setLoading(true)
    axios.post('https://zwallet-dinda.herokuapp.com/users/register',{
    // axios.post('http://localhost:5000/users/register',{

        email: form.email,
        password: form.password,
        name: form.name
    })
    .then((res)=>{
        const result = res.data.data[0]
        console.log(result);
        localStorage.setItem('pins', JSON.stringify(result))
        alert('register success')
        setLoading(false)
        navigate('/register/create-pin')
    })
    .catch((err)=>{
        alert('register failed')
        setLoading(false)
        if(err.response.status === 403){
            setErrorMsg(err.response.data.message)
        }else{
            setErrorMsg("Internal server error")
        }
        
    })

    }

    // const handleRegister = (e)=>{
    //     e.preventDefault()
    //     setLoading(true)
    //     if (form.email !== '' && form.password !=='' && form.name !==''){
    //         setLoading(false)
    //         navigate('/login')
    //     }else{
    //         setErrorMsg('Please fill all forms!')
    //     }
    // }

    const moveToLogin = ()=>{
        navigate('/login')
    }
        return (
        <section className="box box-right p-5">
        <main className="box-right-wrapper d-flex flex-column justify-content-between mx-auto">
            <h2 className="text-center w-100 text-secondary d-block d-lg-none">Sign Up</h2>
            <h2 className="text-secondary w-100 d-none d-lg-block">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
            <p className="text-secondary w-100 text-center d-block d-lg-none">Create your own account.</p>
            <p className="text-secondary w-100 d-none d-lg-block">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone?
                we cover all of that for you!</p>

            <form className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><img src={UserIcon} alt=''/></span>
                <Input 
                name="name" 
                value={form.name}
                onChange={handleForm}
                type="text" 
                className="form-control" 
                placeholder="Enter your name" 
                aria-describedby="addon-wrapping"
                />
            </form>


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
                aria-describedby="addon-wrapping"
                />
            </form>

            <Button 
            isLoading={isLoading}
            onClick={handleRegister}
            className="btn btn-secondary">
                Sign Up</Button>

            <p className='w-100 text-secondary text-center'>Already have an account? <span className='link' onClick={moveToLogin}>Log In</span></p>
            {errorMsg && <h3 className="text-danger">{errorMsg}</h3>}


        </main>           
    </section>
)
}

export default RightBox
