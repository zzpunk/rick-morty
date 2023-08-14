import React, { FC } from 'react';
import styles from './MainLayout.module.scss';

type Props = {
  children: JSX.Element;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
