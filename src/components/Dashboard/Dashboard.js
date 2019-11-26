import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid/v1';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default class Dashboard extends Component {
  state = {
    balance: 0,
    transactions: [],
    amount: '',
  };

  componentDidMount() {
    try {
      const transactionsFromLS = localStorage.getItem('transactions');
      const balanceFromLS = localStorage.getItem('balance');
      if (transactionsFromLS) {
        const transactions = JSON.parse(transactionsFromLS);
        const balance = JSON.parse(balanceFromLS);
        this.setState({ transactions, balance });
      }
    } catch (error) {
      console.log('error :', error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { transactions, balance } = this.state;

    if (prevState.transactions !== transactions) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
      localStorage.setItem('balance', JSON.stringify(balance));
    }
  }

  notifyA = () => toast('Введите сумму для проведения операции!');

  notifyB = () =>
    toast('На счету недостаточно средств для проведения операции!');

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: +value });
  };

  onDeposit = () => {
    const { amount } = this.state;
    if (amount === 0 || amount === '') {
      this.notifyA();
    } else {
      const obj = {
        id: uuid(),
        type: 'Deposit',
        amount,
        date: new Date().toLocaleString(),
      };

      this.setState(prevState => ({
        transactions: [...prevState.transactions, obj],
        balance: +Number(prevState.balance + amount).toFixed(2),
        amount: '',
      }));
    }
  };

  onWithdraw = () => {
    const { amount, balance } = this.state;
    if (amount === 0 || amount === '') {
      this.notifyA();
    } else if (amount > balance) {
      this.notifyB();
    } else {
      const obj = {
        id: uuid(),
        type: 'Withdrawal',
        amount,
        date: new Date().toLocaleString(),
      };

      this.setState(prevState => ({
        transactions: [...prevState.transactions, obj],
        balance: +Number(prevState.balance - amount).toFixed(2),
        amount: '',
      }));
    }
  };

  render() {
    const { transactions, balance, amount } = this.state;
    console.log(balance);
    const income = Number(
      transactions
        .filter(el => el.type === 'Deposit')
        .reduce((acc, e) => {
          return acc + e.amount;
        }, 0),
    ).toFixed(2);
    const expenses = Number(
      transactions
        .filter(el => el.type === 'Withdrawal')
        .reduce((acc, e) => {
          return acc + e.amount;
        }, 0),
    ).toFixed(2);
    return (
      <div className="dashboard">
        <Controls
          onDeposit={this.onDeposit}
          onChange={this.onChange}
          onWithdraw={this.onWithdraw}
          amount={amount}
          notify={this.notify}
        />
        <Balance balance={balance} income={income} expenses={expenses} />
        <TransactionHistory transactions={transactions} />
        <ToastContainer />
      </div>
    );
  }
}
