// import axios from 'axios'
// import React, { createContext, useEffect, useState } from 'react'

// export const walletContext = createContext(null)

// const WalletContext = ({children}) => {
//     const user = JSON.parse(localStorage.getItem('user'))
//     const [wallet, setWallet] = useState({
//         id: 0,
//         user_id: 0,
//         balance: 0
//     })

//     useEffect(()=>{
//         axios.get(`https://zwallet-dinda.herokuapp.com/user-wallet/${user.wallet_id}`)
//         .then((res)=>{
//             const result = res.data.data[0]
//             setWallet(result)
//             localStorage.setItem('wallet', JSON.stringify(result))
//         })
//         .catch((err)=>{
//             console.log(err.response);
//         })

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     })

//     return (
//         <walletContext.Provider value = {{wallet, setWallet}}>
//             {children}
//         </walletContext.Provider>
//         )
// }

// export default WalletContext
