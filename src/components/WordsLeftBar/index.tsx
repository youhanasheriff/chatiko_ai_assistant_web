import React from 'react';

import style from './style.module.scss';

const WordsLeftBar = () => {
  return (
    <div className={style.bg}>
      <p>8000 words left this month</p>
      <div className={style.progress_bar}>
        <div />
      </div>
    </div>
  );
};

export default WordsLeftBar;
