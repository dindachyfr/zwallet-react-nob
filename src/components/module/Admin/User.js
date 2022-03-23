import React, { useEffect, useState } from 'react'
import Input from '../../base/Input'
import Search from '../ContactWallet/search-icon.svg'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../redux-state/action/user';
import { delUser } from '../../../redux-state/action/delUser';
import Trash from '../ManagePhone2/trash.svg'
import ReactPaginate from 'react-paginate'
import Modal from './Modal';


const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get("search");
    // const [users, setUsers] = useState([]);
    const dispatch = useDispatch()
    const usersData = useSelector((state) => state.User)
    // console.log(usersData);
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 4
    const pagesVisited = pageNumber * usersPerPage
    const [modal,setModal] = useState(false)
    const [UID, setUID] = useState(0)
    const handleModal = (id) => {
        setModal(!modal)
        setUID(id)
    }
    console.log(UID);

    const displayUsers = usersData.data.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
        return (
            <div class='recipient d-flex justify-content-between align-items-between shadow-sm pe-3'
            >
                <div class="recipient d-flex p-3">
                    <img src={UserImage} alt='' />
                    <div className='text-secondary ms-3'>
                        <h5>{user.name}</h5>
                        <h5>{user.phone_number}</h5>
                    </div>
                </div>
                <img src={Trash} alt=''
                    onClick={() => handleModal(user.id)}
                />
            </div>
        )
    })

    useEffect(() => {
        dispatch(getUser(querySearch))
    }, [querySearch])


    const handleSearch = (e) => {
        if (e.key === "Enter") {
            setSearchParams({ search: e.target.value });
        }
    }

    const handleDelUser = (id) => {
        dispatch(delUser({ id, querySearch }))
        setModal(false)
    }

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    }


    return (
        <section className="trans-history-contactwallet w-lg-75 w-100 d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-3">
            <div className="history-upper d-flex flex-column px-5 py-lg-0 py-3">
                <div className='d-flex'>
                    <img className='d-block d-lg-none' src='arrow-left-icon.svg' alt='' />
                    <h3 className="text-secondary pt-lg-3 p-3 p-lg-0 title-history">Find User</h3>
                </div>
                <div className="history-input bg-secondary bg-opacity-25 p-2 d-flex">
                    <img src={Search} alt='' />
                    <Input
                        onKeyUp={handleSearch}
                        className="search-input w-100"
                        placeholder="Search receiver here"
                        type="text"
                        name="transferReceiver"
                        id="transferReceiver" />
                </div>

            </div>
            <div class="history-lower h-100 d-flex flex-column justify-content-evenly px-lg-5 pt-3 pt-lg-0">
                {displayUsers}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={Math.ceil(usersData.data.length / usersPerPage)}
                    onPageChange={handlePageChange}
                    containerClassName={"paginationBtns"}
                    previousLinkClassName={"prevBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"disabledPagination"}
                    activeClassName={"activePagination"}
                />

            </div>
            {modal && <Modal handleModal={handleModal} uid={UID} handleDelUser={handleDelUser}/>}
        </section>
    )
}

export default User
