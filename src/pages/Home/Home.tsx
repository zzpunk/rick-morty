import React, { FC } from 'react';
import styles from './Home.module.scss';
import { Filters } from '../../modules/Filters';

type Props = {};

export const Home: FC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      <Filters />
    </div>
  );
};
