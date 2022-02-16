import axios from "axios";
import React, { createContext, useEffect, useState } from 'react';

export const expenseContext = createContext(null);

const ExpenseContext = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user'))

    const [expense, setExpense] = useState({
        sender_wallet_id: 0,
        amount: 0
    })

    useEffect (()=>{
        if(user){
        // axios.get(`https://zwallet-dinda.herokuapp.com/transaction/transfer/expense/user/${user.wallet_id}`)
        axios.get(`http://localhost:5000/transaction/transfer/expense/user/${user.wallet_id}`)
        .then((res)=>{
            const result = res.data.data[0]
            setExpense(result)
        }).catch((err)=>{
            console.log(err.response);

        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <expenseContext.Provider value = {{expense, setExpense}}>
            {children}
        </expenseContext.Provider>
    )
}

export default ExpenseContext;
