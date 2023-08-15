import React, { FC, useRef } from 'react';
import styles from 'modules/Filters/Filters.module.scss';
import { Input, Select, Button } from '@chakra-ui/react';
import classNames from 'classnames';
import {
  StatusesSelect,
  GenderSelect,
} from 'modules/Filters/Filters.constants';
import { pages } from 'routes/constants';
import { useNavigate } from 'react-router-dom';
import { GenderCharTypes, StatusCharTypes } from './Filters.interfaces';
import { PagesTypes } from 'routes/Routes.interfaces';
import { useDispatch } from 'react-redux';
import { setSearchParams } from 'store/rickmorty.slice';
import { useTypedSelector } from 'hooks/useTypedSelector';

type Props = {
  stageOnCharacter?: boolean;
  onSearch?: any;
};

export const Filters: FC<Props> = ({ stageOnCharacter, onSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchParams = useTypedSelector(
    (state) => state.rickMorty.searchParams
  );

  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const speciesRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const statusRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
  const genderRef = useRef() as React.MutableRefObject<HTMLSelectElement>;

  const handle = () => {
    const params = {
      name: nameRef.current.value,
      status: statusRef.current.value as StatusCharTypes,
      gender: genderRef.current.value as GenderCharTypes,
      species: speciesRef.current.value,
    };

    if (stageOnCharacter) {
      onSearch(params);
    }

    dispatch(setSearchParams(params));

    navigate({
      pathname: pages[PagesTypes.CHARACTERS].path,
    });
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
          style={{ backgroundColor: 'white' }}
          placeholder="Имя персонажа"
          defaultValue={searchParams?.name}
        />

        <Select
          ref={statusRef}
          style={{ backgroundColor: 'white' }}
          placeholder="Статус"
          defaultValue={searchParams?.status}
        >
          {StatusesSelect.map((item) => (
            <option key={item.value} value={item.value}>
              {item.option}
            </option>
          ))}
        </Select>

        <Input
          ref={speciesRef}
          defaultValue={searchParams?.species}
          style={{ backgroundColor: 'white' }}
          placeholder="Вид"
        />

        <Select
          ref={genderRef}
          defaultValue={searchParams?.gender}
          style={{ backgroundColor: 'white' }}
          placeholder="Пол"
        >
          {GenderSelect.map((item) => (
            <option key={item.value} value={item.value}>
              {item.option}
            </option>
          ))}
        </Select>

        {stageOnCharacter && (
          <Button style={{ width: '250px' }} onClick={handle}>
            Поиск
          </Button>
        )}
      </div>

      {!stageOnCharacter && (
        <Button onClick={handle} size="lg">
          Поиск
        </Button>
      )}
    </div>
  );
};
