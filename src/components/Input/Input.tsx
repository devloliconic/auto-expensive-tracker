import React, { forwardRef } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './input.interface';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeHolder, label, ...props }, ref) => {
  return (
    <>
      {label ? <label className={styles.label}>{label}</label> : undefined}
      <input placeholder={placeHolder} {...props} className={styles.baseInput} ref={ref} />
    </>
  );
});

Input.displayName = 'Input';
