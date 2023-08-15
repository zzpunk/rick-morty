import React, { FC } from 'react';
import styles from './CardCharacter.module.scss';

type Props = {
  character: any;
};

export const CardCharacter: FC<Props> = ({ character }) => {
  return (
    <div className={styles.main}>
      <div className={styles.avatar}>
        <img src={character.image} alt="avatar" />
      </div>
    </div>
  );
};
