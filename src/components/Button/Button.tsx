import React from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './button.interface';

export const Button: React.FC<ButtonProps> = ({ variant = 'box', children, size = 'large', ...props }) => {
  return (
    <button className={`${styles.baseButton} ${styles[size]} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};
