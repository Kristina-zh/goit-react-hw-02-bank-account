import React from 'react';
import PropTypes from 'prop-types';
import s from './Balance.module.css';

const Balance = ({ income, expenses, balance }) => (
  <section className={s.balance}>
    <span className={s.span}>↑{income}$</span>
    <span className={s.span}>↓{expenses}$</span>
    <span className={s.span}>Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default Balance;
