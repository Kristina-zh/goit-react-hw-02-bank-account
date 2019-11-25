import React from 'react';
import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({ onChange, onDeposit, onWithdraw, amount }) => (
  <section className={s.controls}>
    <input
      className={s.input}
      value={amount}
      onChange={onChange}
      type="number"
      name="amount"
    />
    <button className={s.button} onClick={onDeposit} type="button">
      Deposit
    </button>
    <button className={s.button} onClick={onWithdraw} type="button">
      Withdraw
    </button>
  </section>
);

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onDeposit: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
};

export default Controls;
