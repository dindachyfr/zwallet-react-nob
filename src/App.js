import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import History from './pages/History/History'
import RequireAuth from './components/base/RequireAuth/RequireAuth';
import PublicRoute from './components/base/RequireAuth/PublicRoute';
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
import Admin from './pages/Admin/Admin';
import User from './pages/User/User';
import Notification from './pages/Notification/Notification';

const App = () => {

  useEffect(()=> {
    const socket = io("http://localhost:5000")
  }, [])
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
    <RequireAuth>
      <Home/> 
    </RequireAuth>
}/>
      <Route path="login" element={
      <PublicRoute>
      <Login/>
      </PublicRoute>}/>
      <Route path="register" element={
      <PublicRoute>
      <SignUp/>
      </PublicRoute>}/>
      <Route path="register/create-pin" element={
      <PublicRoute>
      <CreatePin/>
      </PublicRoute>}/>
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
      <RequireAuth>
        <Profile/>
     </RequireAuth>
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

<Route path="admin" element={
      <RequireAuth>
        <Admin/>
      </RequireAuth>
}/>

<Route path="admin/users" element={
      <RequireAuth>
        <User/>
      </RequireAuth>
}/>

<Route path="admin/notification" element={
      <RequireAuth>
        <Notification/>
      </RequireAuth>
}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
