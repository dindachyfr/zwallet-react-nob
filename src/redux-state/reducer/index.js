import { combineReducers } from "redux";
import User from './user';
import Profile from './profile'
import Wallet from './wallet'
import Expense from './expense'
import Income from './income'

const rootReducers = combineReducers({
    User,
    Profile,
    Wallet,
    Expense,
    Income
})

export default rootReducers