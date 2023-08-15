import React, { FC } from 'react';
import styles from 'layouts/MainLayout.module.scss';

type Props = {
  children: JSX.Element;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
