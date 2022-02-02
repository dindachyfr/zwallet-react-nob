import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WalletContext from './Context/WalletContext'
import UserContext from './Context/UserContext'
import IncomeContext from './Context/IncomeContext'
import ExpenseContext from './Context/ExpenseContext'

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
    <WalletContext>
      <IncomeContext>
        <ExpenseContext>
    <App />
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
