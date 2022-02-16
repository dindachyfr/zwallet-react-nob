import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WalletContext from './Context/WalletContext'
import UserContext from './Context/UserContext'
import IncomeContext from './Context/IncomeContext'
import ExpenseContext from './Context/ExpenseContext'
import { Provider } from 'react-redux'
import store from './redux-state/store/store'

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
    <WalletContext>
      <IncomeContext>
        <ExpenseContext>
        <Provider store={store}>
    <App />
    </Provider>
    </ExpenseContext>
    </IncomeContext>
    </WalletContext>
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
