import React from 'react';
import styles from './style.module.scss';

const Label: React.FC = () => {
  return (
    <span className={styles['welcome-back-to']}>
      <span className={styles['text-wrapper']}>Welcome to</span>
      <span className={styles.span}>Chatiko AI</span>
    </span>
  );
};

export default Label;
