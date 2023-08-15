import React, { FC, useEffect, useState } from 'react';
import { Filters } from 'modules/Filters';
import { ParamsSearch } from 'modules/Filters/Filters.interfaces';
import { CardCharacter } from 'components/CardCharacter/CardCharacter';
import axios from 'axios';
import { useTypedSelector } from 'hooks/useTypedSelector';

import styles from './Characters.module.scss';

export const Characters: FC = React.memo(() => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState('');
  const [isEmpty, setEmpty] = useState(false);

  const searchParams = useTypedSelector(
    (state) => state.rickMorty.searchParams
  );

  const handleGetCharacters = async (params: ParamsSearch) => {
    try {
      const res = await axios.get('https://rickandmortyapi.com/api/character', {
        params: params,
      });

      setCharacters(res.data.results);
      setNextPage(res.data.info.next);
      setEmpty(false);
    } catch (err) {
      setEmpty(true);
    }
  };

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      console.log('scroll');
      setFetching(true);
    }
  };

  useEffect(() => {
    if (searchParams) {
      handleGetCharacters(searchParams);
    }
  }, [searchParams]);

  useEffect(() => {
    if (isFetching && nextPage) {
      axios
        .get(nextPage)
        .then((res) => {
          setCharacters([...characters, ...res.data.results]);
          setNextPage(res.data.info.next);
        })
        .catch((e) => {
          setFetching(false);
        })
        .finally(() => setFetching(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, nextPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Filters onSearch={handleGetCharacters} stageOnCharacter />

      {isEmpty && <div>Пусто</div>}

      <div className={styles['card-group']}>
        {characters?.map((item) => (
          <CardCharacter character={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
});
