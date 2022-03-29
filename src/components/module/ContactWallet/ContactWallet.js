import React, { useEffect, useState } from 'react'
import Input from '../../base/Input'
import './contactwallet.css'
import Search from './search-icon.svg'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import ReactPaginate from 'react-paginate'
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../redux-state/action/user';


const ContactWallet = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const querySearch = searchParams.get("search");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const usersData = useSelector((state) => state.User)

    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 4
    const pagesVisited = pageNumber * usersPerPage

    const displayUsers = usersData.data.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
        return (
            <div class='recipient pointer d-flex justify-content-between align-items-between shadow-sm'
                onClick={() => navigate(`/transfer/${user.id}`)}>
                <div class="recipient d-flex p-3">
                    <img src={UserImage} alt='' />
                    <div className='text-secondary ms-3'>
                        <h5>{user.name}</h5>
                        <h5>{user.phone_number}</h5>
                    </div>
                </div>
            </div>
        )
    })
    // console.log(usersData);
    useEffect(() => {
        dispatch(getUser(querySearch))
    }, [querySearch])


    const handleSearch = (e) => {
        if (e.key === "Enter") {
            setSearchParams({ search: e.target.value });
        }
    }

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <section class="trans-history w-lg-75 w-100 d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-3">
            <div className="history-upper-h d-flex flex-column px-lg-5 px-3 py-lg-0 py-3">
                <div className='d-flex align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-arrow-left d-block d-lg-none text-white"
                        viewBox="0 0 16 16"
                        onClick={() => navigate(-1)}>
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    <h3 className="text-secondary pt-lg-3 p-3 p-lg-0 title-history">Find Receiver</h3>
                </div>
                <div className="history-input bg-secondary bg-opacity-25 p-2 d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-search text-secondary" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
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

        </section>
    )
}

export default ContactWallet
