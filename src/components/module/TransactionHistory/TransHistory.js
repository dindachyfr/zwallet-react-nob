import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import UserImage from '../../../components/module/Navbar/NangIs-icon.svg'
import ReactPaginate from 'react-paginate'
import './history.css'
import { useNavigate } from 'react-router-dom'
const TransHistory = () => {
    const navigate= useNavigate()
    const [transactions, setTransactions] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))
    const [pageNumber, setPageNumber] = useState(0)
    const transPerPage = 4
    const pagesVisited = pageNumber * transPerPage
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    }
    const displayHistories = transactions.slice(pagesVisited, pagesVisited + transPerPage).map((transaction) => {
        return (
            <div class='recipient d-flex justify-content-between pe-lg-0 pe-3 align-items-center'>
                <div class="recipient d-flex p-3 p-lg-0">
                    <img src={UserImage} alt='' />
                    <div className='text-secondary ms-3'>
                        <h5>{transaction.receiver}</h5>
                        <h5>Transfer</h5>
                    </div>
                </div>
                <h5 className='text-danger'>- IDR {transaction.amount}</h5>
            </div>
        )
    })
    useEffect(() => {
        // axios.get(`https://zwallet-dinda.herokuapp.com/transaction/history/${user.wallet_id}?limit=4`)
        axios.get(`${process.env.REACT_APP_URL_BACKEND}/transaction/history/${user.wallet_id}?limit=10`)
            .then((res) => {
                const result = res.data.data
                setTransactions(result)
            }).catch((err) => {
                console.log(err.response);

            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <section class="trans-history w-lg-75 w-100 d-flex flex-column bg-white shadow-sm p-lg-3 flex-grow-3">
                <div class="history-upper-h d-flex align-items-center px-lg-5 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" 
                    class="bi bi-arrow-left d-block d-lg-none text-white" 
                    viewBox="0 0 16 16"
                    onClick={()=>navigate(-1)}>
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    <h3 class="text-secondary pt-lg-3 p-3 p-lg-0 title-history">Transaction History</h3>
                </div>

                <div class="history-lower h-100 d-flex flex-column justify-content-evenly px-lg-5 pt-3 pt-lg-0">
                    {/* <h4 class="text-secondary ps-lg-0 ps-3">Within This Week</h4> */}
                    {displayHistories}
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={Math.ceil(transactions.length / transPerPage)}
                        onPageChange={handlePageChange}
                        containerClassName={"paginationBtns"}
                        previousLinkClassName={"prevBtn"}
                        nextLinkClassName={"nextBtn"}
                        disabledClassName={"disabledPagination"}
                        activeClassName={"activePagination"}
                    />

                    {/* {transactions.map((transaction) => {
                        return (
                            <div class='recipient d-flex justify-content-between pe-lg-0 pe-3 align-items-center'>
                                <div class="recipient d-flex p-3 p-lg-0">
                                    <img src={UserImage} alt='' />
                                    <div className='text-secondary ms-3'>
                                        <h5>{transaction.receiver}</h5>
                                        <h5>Transfer</h5>
                                    </div>
                                </div>
                                <h5 className='text-danger'>- IDR {transaction.amount}</h5>
                            </div>
                        )
                    })} */}
                </div>
            </section>
        </Fragment>
    )
}

export default TransHistory
