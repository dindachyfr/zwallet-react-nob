import React, { useEffect, useState } from 'react'
import Input from '../../base/Input'
import './contactwallet.css'
import Search from './search-icon.svg'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import axios from 'axios'
import { useNavigate, useSearchParams } from "react-router-dom";


const ContactWallet = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get("search");
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    // useEffect(()=>{
    //     axios.get('https://zwallet-dinda.herokuapp.com/users?limit=4')
    //     .then((res)=>{
    //         const result = res.data.data
    //         setUsers(result)
    //     }).catch((err)=>{
    //         console.log(err.response);
    //     })
    // }, [])

    useEffect(() => {
        if (querySearch) {
          axios
            .get(`https://zwallet-dinda.herokuapp.com/users?filter=${querySearch}&limit=4`)
            // .get(`http://localhost:5000/users?filter=${querySearch}&limit=4`)

            .then((res) => {
              const result = res.data.data;
            setUsers(result)
})
            .catch((err) => {
              console.log(err.response);
            });
        } else {
          axios
          .get("https://zwallet-dinda.herokuapp.com/users?limit=4")
        //   .get("http://localhost:5000/users?limit=4")
          .then((res) => {
              const result = res.data.data;
              setUsers(result)
            })
            .catch((err) => {
              console.log(err.response);
            });
        }
      }, [querySearch]);
    
    // const handleSearch = (e) =>{
    //     axios
    //       .get(
    //         `https://zwallet-dinda.herokuapp.com/users?filter=${e.target.value}&limit=4`)
    //       .then((res) => {
    //         const result = res.data.data;
    //         setUsers(result);
    //       })
    //       .catch((err) => {
    //         console.log(err.response);
    //       });
    // }

    const handleSearch = (e) => {
        if (e.key === "Enter") {
          setSearchParams({ search: e.target.value });
        }
      }
        
    return (
        <section className="trans-history-contactwallet w-lg-75 w-100 d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-3">               
                <div className="history-upper d-flex flex-column px-5 py-lg-0 py-3">  
                    <div className='d-flex'>
                        <img className='d-block d-lg-none' src='arrow-left-icon.svg' alt=''/>
                        <h3 className="text-secondary pt-lg-3 p-3 p-lg-0 title-history">Find Receiver</h3>
                        </div>                  
                    <div className="history-input bg-secondary bg-opacity-25 p-2 d-flex">                
                        <img src={Search} alt=''/>
                        <Input 
                        onKeyUp = {handleSearch}
                        className="search-input w-100" 
                        placeholder="Search receiver here" 
                        type="text" 
                        name="transferReceiver" 
                        id="transferReceiver"/>
                    </div>

                </div>
                <div class="history-lower h-100 d-flex flex-column justify-content-evenly px-lg-5 pt-3 pt-lg-0">
                    {users.map((user)=>{
                        return (
                            <div class='recipient d-flex justify-content-between align-items-between shadow-sm' 
                            onClick={()=>navigate(`/transfer/${user.id}`)}>
                            <div class="recipient d-flex">
                                <img src={UserImage} alt=''/>
                                <div className='text-secondary ms-3'>
                                    <h5>{user.name}</h5>
                                    <h5>{user.phone_number}</h5>
                                </div>
                            </div>
                            </div>
                            )
                    })}
                        {/* <div class='recipient d-flex justify-content-between align-items-between shadow-sm'>
                        <div class="recipient d-flex">
                            <img src={UserImage} alt=''/>
                            <div className='text-secondary ms-3'>
                                <h5>Amanda Lim</h5>
                                <h5>082783826409</h5>
                            </div>
                        </div>
                        </div>
                        <div class='recipient d-flex justify-content-between align-items-between shadow-sm'>
                        <div class="recipient d-flex">
                            <img src={UserImage} alt=''/>
                            <div className='text-secondary ms-3'>
                                <h5>Cahyono</h5>
                                <h5>082783826409</h5>
                            </div>
                        </div>
                        </div>
                        <div class='recipient d-flex justify-content-between align-items-between shadow-sm'>
                        <div class="recipient d-flex">
                            <img src={UserImage} alt=''/>
                            <div className='text-secondary ms-3'>
                                <h5>Nani Sunani</h5>
                                <h5>082783826409</h5>
                            </div>
                        </div>
                        </div> */}

                        </div>

        </section>
        )
}

export default ContactWallet
