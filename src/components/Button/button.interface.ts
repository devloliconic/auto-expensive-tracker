import React from 'react';

type ButtonVariant = 'box' | 'rounded' | 'icon' | 'edit';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: React.ReactNode;
  size?: ButtonSize;
}
