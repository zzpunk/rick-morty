import React, { FC, useEffect, useState } from 'react';
import { Filters } from 'modules/Filters';
import { ParamsSearch } from 'modules/Filters/Filters.interfaces';
import { CardCharacter } from 'components/CardCharacter/CardCharacter';
import axios from 'axios';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setActiveCharacter } from 'store/rickmorty.slice';
import styles from './Characters.module.scss';
import { DetailCard } from 'components/DetailCard';
import { Spinner } from '@chakra-ui/react';
import { ICardData } from './Characters.interfaces';

export const Characters: FC = React.memo(() => {
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState<any[]>([]);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState('');
  const [isEmpty, setEmpty] = useState(false);
  const [activeChar, setActiveChar] = useState<null | ICardData>(null);
  const [isOpenCard, setOpenCard] = useState<boolean>(false);

  const { searchParams, activeCharacter } = useTypedSelector(
    (state) => state.rickMorty
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
    } finally {
      setFetching(false);
    }
  };

  const handleOpenDetailChar = async (id: string) => {
    const cachedEl = activeCharacter.find((item) => item.id === id);

    if (cachedEl) {
      //Если уже выбирали карточку
      setActiveChar(cachedEl);
      setOpenCard(true);
    } else {
      let dataCard: ICardData = {
        numberEpisode: '',
        nameEpisode: '',
        airDate: '',
        lastLocation: '',
        dimension: '',
        id: id,
        nameCharacter: '',
      };

      const active = characters.find((item: { id: string }) => item.id === id);

      const lastEpisodeUrl = active.episode.at(-1);
      const locationUrl = active.location.url;
      const nameCharacter = active.name;

      dataCard.nameCharacter = nameCharacter;

      await axios.get(lastEpisodeUrl).then((res) => {
        dataCard.nameEpisode = res.data.name;
        dataCard.airDate = res.data.air_date;
        dataCard.numberEpisode = res.data.id;
      });

      await axios.get(locationUrl).then((res) => {
        dataCard.lastLocation = res.data.name;
        dataCard.dimension = res.data.dimension;
      });

      dispatch(setActiveCharacter([...activeCharacter, dataCard]));
      setActiveChar(dataCard);
      setOpenCard(true);
    }
  };

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
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

    if (!nextPage) {
      setFetching(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, nextPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <Filters onSearch={handleGetCharacters} stageOnCharacter />
        </div>

        {isEmpty ? (
          <div className={styles.empty}>Ничего не найдено</div>
        ) : (
          <div>
            <div className={styles['card-group']}>
              {characters?.map((item) => (
                <CardCharacter
                  onOpenDetail={() => handleOpenDetailChar(item.id)}
                  character={item}
                  key={item?.id}
                />
              ))}
            </div>

            {isFetching && (
              <div>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {isOpenCard && activeChar && (
        <DetailCard
          onClose={() => setOpenCard(false)}
          activeData={activeChar}
        />
      )}
    </div>
  );
});
