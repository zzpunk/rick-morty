import React, { FC } from 'react';
import styles from './DetailCard.module.scss';
import { Button } from '@chakra-ui/react';
import { ICardData } from 'pages/Characters/Characters.interfaces';

type Props = {
  activeData: ICardData;
  onClose: () => void;
};

export const DetailCard: FC<Props> = ({ activeData, onClose }) => {
  return (
    <div className={styles.main}>
      <div className={styles.name}>{activeData.nameCharacter}</div>

      <div className={styles['item-group']}>
        <div className={styles.item}>
          <option>Номер последнего эпизода</option>
          <div className={styles['item-value']}>{activeData.numberEpisode}</div>
        </div>

        <div className={styles.item}>
          <option>Наименование эпизода</option>
          <div className={styles['item-value']}>{activeData.nameEpisode}</div>
        </div>

        <div className={styles.item}>
          <option>Дата выхода эпизода</option>
          <div className={styles['item-value']}>{activeData.airDate}</div>
        </div>

        <div className={styles.item}>
          <option>Последняя локация персонажа</option>
          <div className={styles['item-value']}>{activeData.lastLocation}</div>
        </div>

        <div className={styles.item}>
          <option>Измерение локации</option>
          <div className={styles['item-value']}>{activeData.dimension}</div>
        </div>
      </div>

      <Button onClick={onClose}>Закрыть</Button>
    </div>
  );
};
