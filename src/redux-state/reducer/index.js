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
    Register
})

export default rootReducers