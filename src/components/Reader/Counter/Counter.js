import React from 'react';
import s from '../Reader.module.css';

const Counter = ({ count, max }) => (
  <p className={s.counter}>
    {count}/{max}
  </p>
);

export default Counter;
