import React from 'react';
import styles from './style.module.scss';

const Label: React.FC = () => {
  return (
    <div className={styles.label}>
      <p className={styles['welcome-back-to']}>
        <span className={styles['text-wrapper']}>Welcome Back to </span>
        <span className={styles.span}>Chatiko AI</span>
      </p>
    </div>
  );
};

export default Label;
