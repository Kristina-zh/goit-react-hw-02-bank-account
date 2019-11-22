import React from 'react';
import PropTypes from 'prop-types';
import s from '../Reader.module.css';

const Controls = ({
  onIncrement,
  onDecrement,
  notActiveNext,
  notActivePrev,
}) => (
  <section className={s.controls}>
    <button
      disabled={notActivePrev}
      onClick={onDecrement}
      type="button"
      className={s.button}
    >
      Назад
    </button>
    <button
      disabled={notActiveNext}
      onClick={onIncrement}
      type="button"
      className={s.button}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
