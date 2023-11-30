import React from 'react';
import styles from './style.module.scss';

const Label: React.FC = () => {
  return (
    <p className={styles['welcome-back-to']}>
      <span className={styles['text-wrapper']}>Welcome to </span>
      <span className={styles.span}>Chatiko AI</span>
    </p>
  );
};

export default Label;
