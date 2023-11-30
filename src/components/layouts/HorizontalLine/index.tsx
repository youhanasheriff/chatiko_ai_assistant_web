import React from 'react';

import style from './style.module.scss';

type HorizontalLineProps = {
  className?: string;
  text?: string;
};

const HorizontalLine: React.FC<HorizontalLineProps> = ({ className, text }) => {
  return (
    <span className={`${className} ${style.span}`}>
      <hr className={style.line} />
      {text && <span className={style.text}>{text}</span>}
      <hr className={style.line} />
    </span>
  );
};

export default HorizontalLine;
