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
      <Route path="history" element={
      <RequireAuth>
        <History/>
      </RequireAuth>
}/>
      <Route path="transfer" element={
      <RequireAuth>
        <TransferBlank/>      
      </RequireAuth>
}/>
      <Route path="transfer/:id" element={
      <RequireAuth>
        <Transfer2/>      
      </RequireAuth>
}/>
      <Route path="transfer/confirmation" element={
      <RequireAuth>
        <TransferConfirm/>
      </RequireAuth>
}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
