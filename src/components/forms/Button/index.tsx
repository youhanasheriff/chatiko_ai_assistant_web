import React, { ButtonHTMLAttributes } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa6';

import styles from './style.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  id?: string;
  icon?: React.ReactElement | 'Apple' | 'Google';
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    label,
    name,
    type = 'button',
    id,
    placeholder,
    icon,
    ...rest
  } = props;

  let iconComponent = null;

  switch (icon) {
    case 'Apple':
      iconComponent = <FaApple />;
      break;
    case 'Google':
      iconComponent = <FaGoogle />;
      break;
    default:
      iconComponent = icon;
  }

  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      name={name}
      id={id ?? name}
      {...rest}
    >
      {iconComponent && <span>{iconComponent}</span>} {label}
    </button>
  );
};

export default Button;
