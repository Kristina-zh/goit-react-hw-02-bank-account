import React from 'react';
import s from '../Reader.module.css';

const Publication = ({ count, title, text }) => (
  <article className={s.publication}>
    <h2>
      {count}.{title}
    </h2>
    <p>{text}</p>
  </article>
);

export default Publication;
