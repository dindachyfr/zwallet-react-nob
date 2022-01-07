import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import History from './pages/History/History'
import RequireAuth from './components/base/RequireAuth/RequireAuth';
import TransferBlank from './pages/Transfer/Transfer1';
import Transfer2 from './pages/Transfer/TransferBlank';
import TransferConfirm from './pages/TransferConfirm/TransferConfirm';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
    <RequireAuth>
      <Home/> 
    </RequireAuth>
}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<SignUp/>}/>
      <Route path="history" element={<History/>}/>
      <Route path="transfer" element={<TransferBlank/>}/>
      <Route path="transfer/:id" element={<Transfer2/>}/>
      <Route path="transfer/confirmation" element={<TransferConfirm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
