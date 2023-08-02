import React from 'react';
import css from './ButtonBack.module.css';

const ButtonBack = () => {
  return (
    <button type="button" className={css.btnBack}>
      GoBack
    </button>
  );
};

export default ButtonBack;