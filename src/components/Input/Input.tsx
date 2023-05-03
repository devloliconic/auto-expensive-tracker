import React from 'react';

import styles from './Input.module.scss';
import { InputProps } from './input.interface';

export const Input = ({ placeHolder, label, ...props }: InputProps) => {
  return (
    <>
      {label ? <label className={styles.label}>{label}</label> : undefined}
      <input placeholder={placeHolder} {...props} className={styles.baseInput} />
    </>
  );
};
