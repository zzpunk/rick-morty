import React, { FC } from 'react';
import styles from 'pages/Home/Home.module.scss';
import { Filters } from 'modules/Filters';

export const Home: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Filters />
    </div>
  );
};
