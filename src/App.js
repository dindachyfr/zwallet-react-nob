import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import History from './pages/History/History'
import RequireAuth from './components/base/RequireAuth/RequireAuth';
import TransferBlank from './pages/Transfer/Transfer1';
import Transfer2 from './pages/Transfer/TransferBlank';
import TransferConfirm from './pages/TransferConfirm/TransferConfirm';
import CreatePin from './pages/CreatePin/CreatePin';
import Profile from './pages/profile/Profile'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import ChangePin from './pages/ChangePin/ChangePin';
import SetNewPin from './pages/SetNewPin/SetNewPin';
import ManagePhone from './pages/ManagePhone.js/ManagePhone';
import ManagePhonez from './pages/ManagePhone.js/ManagePhone2';

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
      <Route path="register/create-pin" element={<CreatePin/>}/>
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

<Route path="profile" element={
      // <RequireAuth>
        <Profile/>
      // </RequireAuth>
}/>

<Route path="profile/personal-info" element={
      <RequireAuth>
        <PersonalInfo/>
      </RequireAuth>
}/>

<Route path="profile/managePIN" element={
      <RequireAuth>
        <ChangePin/>
      </RequireAuth>
}/>

<Route path="profile/managePIN/set-new" element={
      <RequireAuth>
        <SetNewPin/>
      </RequireAuth>
}/>

<Route path="profile/managephone" element={
      <RequireAuth>
        <ManagePhone/>
      </RequireAuth>
}/>

<Route path="profile/managephone/existing" element={
      <RequireAuth>
        <ManagePhonez/>
      </RequireAuth>
}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
