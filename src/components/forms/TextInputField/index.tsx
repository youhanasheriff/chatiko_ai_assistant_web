import React, { forwardRef } from 'react';
import styles from './style.module.scss';

interface TextInputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  id?: string;
}

const TextInputField = forwardRef<HTMLInputElement, TextInputFieldProps>(
  (props, ref) => {
    const { label, name, type = 'text', id, placeholder } = props;

    return (
      <div className={styles.input}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={id ?? name}
          placeholder={placeholder ?? label}
          ref={ref}
        />
      </div>
    );
  },
);

export default TextInputField;
