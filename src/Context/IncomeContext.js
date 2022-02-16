import axios from "axios";
import React, { createContext, useEffect, useState } from 'react';

export const incomeContext = createContext(null);

const IncomeContext = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user'))

    const [income, setIncome] = useState({
        receiver_wallet_id: 0,
        amount: 0
    })

    useEffect (()=>{
        if(user){
        // axios.get(`https://zwallet-dinda.herokuapp.com/transaction/transfer/income/user/${user.wallet_id}`)
        axios.get(`http://localhost:5000/transaction/transfer/income/user/${user.wallet_id}`)
        .then((res)=>{
            const result = res.data.data[0]
            setIncome(result)
        }).catch((err)=>{
            console.log(err.response);

        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <incomeContext.Provider value = {{income, setIncome}}>
            {children}
        </incomeContext.Provider>
    )
}

export default IncomeContext;
