import React, { FC, useState, useRef } from 'react';
import styles from './Filters.module.scss';
import { Input, Select, Button } from '@chakra-ui/react';
import classNames from 'classnames';
import { rickMortyApi } from '../../store/api';
import { StatusesSelect, GenderSelect } from './Filters.constants';

type Props = {
  stageOnCharacter?: boolean;
};

export const Filters: FC<Props> = ({ stageOnCharacter }) => {
  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const speciesRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const statusRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
  const genderRef = useRef() as React.MutableRefObject<HTMLSelectElement>;

  const [params, setParams] = useState('');

  const [trigger, { data, isLoading, error }] =
    rickMortyApi.useLazyGetCharactersQuery();

  const handle = () => {
    // trigger('');
    const name = nameRef.current.value;
    const status = statusRef.current.value;
    const gender = genderRef.current.value;
    const species = speciesRef.current.value;

    console.log(name, status, gender, species);
  };

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.characters]: stageOnCharacter,
      })}
    >
      <div className={styles.box}>
        <Input
          ref={nameRef}
          style={{ backgroundColor: 'white', minWidth: '300px' }}
          placeholder="Имя персонажа"
        />

        <Select
          ref={statusRef}
          style={{ backgroundColor: 'white' }}
          placeholder="Статус"
        >
          {StatusesSelect.map((item) => (
            <option key={item.value} value={item.value}>
              {item.option}
            </option>
          ))}
        </Select>

        <Input
          ref={speciesRef}
          style={{ backgroundColor: 'white', minWidth: '300px' }}
          placeholder="Вид. Например: Human, Alien"
        />

        <Select
          ref={genderRef}
          style={{ backgroundColor: 'white' }}
          placeholder="Пол"
        >
          {GenderSelect.map((item) => (
            <option key={item.value} value={item.value}>
              {item.option}
            </option>
          ))}
        </Select>

        {stageOnCharacter && <Button>Поиск</Button>}
      </div>

      {!stageOnCharacter && (
        <Button onClick={handle} size="lg">
          Поиск
        </Button>
      )}
    </div>
  );
};
