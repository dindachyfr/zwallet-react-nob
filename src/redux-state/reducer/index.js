import { combineReducers } from "redux";
import User from './user';
import Profile from './profile'
import Wallet from './wallet'
import Expense from './expense'
import Income from './income'
import PostPIN from './postPIN'
import PutPIN from './putPIN'
import UserByID from './userByID'
import PostTransfer from './postTransfer'
import TransactionByID from './transactionByID'
import PutTransaction from './putTransaction'
import PutPhone from './putPhone'
import Register from './register'
import Login from './login'
import PP from './PP'
import NotifTransfer from './notifTransfer'
import DelUser from './deluser'
import PostNotif from './postNotif'
import GetNotif from './getNotif'
import Topup from './topup'

const rootReducers = combineReducers({
    User,
    Profile,
    Wallet,
    Expense,
    Income,
    PostPIN,
    PutPIN,
    UserByID,
    PostTransfer,
    TransactionByID,
    PutTransaction,
    PutPhone,
    Register,
    Login,
    PP,
    NotifTransfer,
    DelUser,
    PostNotif,
    GetNotif,
    Topup
})

export default rootReducers