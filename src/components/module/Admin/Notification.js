import React, { useEffect, useRef, useState } from 'react'
import Input from '../../base/Input'
import './notif.css'
import { useDispatch, useSelector } from 'react-redux';
import { postNotif } from '../../../redux-state/action/postNotif';
import { useNavigate } from 'react-router-dom';
import socket from '../../../helper/socket'

// DISPATCH LAGI ON COMMENT BUAT TESTING NOTIF, NANTI DI-UNCOMMENT YA!!!!!

const Notification = () => {
    const [image, setImage] = useState(null)
    // const [notif, setNotif] = useState([])
    const [form, setForm] = useState({
        title: "",
        message: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const notifData = useSelector((state)=> state.PostNotif)
    console.log(notifData);

        const handleForm = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const handleImage = (e) => {
        e.preventDefault()
        setImage(e.target.files[0])
        console.log(image);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", form.title)
        formData.append("message", form.message)
        formData.append("image", image)
        // dispatch(postNotif({formData, navigate}))
        socket.emit("notif admin", {
            title: form.title, 
            message: form.message, 
            image})
    }

    return (
        <section class="trans-history w-lg-75 w-100 bg-white shadow-sm p-lg-3">
            <form 
            type='submit'
            encType='multipart/form-data' 
            >
                <p className='text-secondary mt-5 ms-3'>
                    Notification Title
                </p>
                <div className='w-100'>
                    <Input
                    className="w-50 ms-3 p-3 form-notif"
                    type='text'
                    placeholder= 'Insert Notification Title'
                    name="title" 
                    value={form.title}    
                    onChange={handleForm}
                    />
                </div>
                <p className='text-secondary mt-5 ms-3'>
                    Notification Text
                </p>
                <div className='w-100'>
                    <Input
                    className="w-50 ms-3 p-3 form-notif-1"
                    type='text'
                    placeholder= 'Insert Notification Text'
                    name="message" 
                    value={form.message}    
                    onChange={handleForm}
                    />
                </div>

                <p className='text-secondary mt-5 ms-3'>
                    Notification Image
                </p>
                <Input
                type="file"
                onChange= {handleImage}
                />
            </form>
            <div class="button-wrapper w-100 d-flex justify-content-start pt-3 ms-3">
                <button 
                class='continue-button'
                onClick={handleSubmit}
                >Save Changes
                </button>
            </div>
        </section>
        )
}

export default Notification
