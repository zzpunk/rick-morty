import React, { FC } from 'react';
import styles from './CardCharacter.module.scss';

type Props = {
  character: any;
  onOpenDetail: () => void;
};

export const CardCharacter: FC<Props> = ({ character, onOpenDetail }) => {
  return (
    <div
      onClick={onOpenDetail}
      data-name="char-item"
      id={character.id}
      className={styles.main}
    >
      <div className={styles.avatar}>
        <img src={character.image} alt="avatar" />
      </div>

      <div></div>

      <div className={styles.info}>
        <div className={styles['info__item']}>
          <option className={styles['info__item-option']}>Имя:</option>
          <h3 className={styles['info__item-name']}>{character.name}</h3>
        </div>

        <div className={styles['info__item']}>
          <option className={styles['info__item-option']}>Пол:</option>
          <p className={styles['info__item-value']}>{character.gender}</p>
        </div>

        <div className={styles['info__item']}>
          <option className={styles['info__item-option']}>Статус:</option>
          <p className={styles['info__item-value']}>{character.status}</p>
        </div>

        <div className={styles['info__item']}>
          <option className={styles['info__item-option']}>Вид:</option>
          <p className={styles['info__item-value']}>{character.species}</p>
        </div>

        <div className={styles['info__item']}>
          <option className={styles['info__item-option']}>Измерение:</option>
          <p className={styles['info__item-value']}>
            {character.location.name}
          </p>
        </div>
      </div>
    </div>
  );
};
