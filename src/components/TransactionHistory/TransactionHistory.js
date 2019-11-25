import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={s.history}>
    <thead className={s.thead}>
      <tr className={s.tr}>
        <th className={s.th}>Transaction</th>
        <th className={s.th}>Amount</th>
        <th className={s.th}>Date</th>
      </tr>
    </thead>

    <tbody className={s.tbody}>
      {transactions.map(el => (
        <tr className={s.tr} key={el.id}>
          <td className={s.item}>{el.type}</td>
          <td className={s.item}>{Number(el.amount).toFixed(2)}$</td>
          <td className={s.item}>{el.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
