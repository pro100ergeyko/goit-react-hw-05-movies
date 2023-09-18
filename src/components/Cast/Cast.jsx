import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import fethTmdbAPI from 'helpers/TmdbAPI';
import {
  CastContainer,
  CastDeskContainer,
  CastImg,
  CastItem,
  CastList,
} from './Cast.styled';

export default function Cast() {
  const { moviesId } = useParams();
  const [castItems, setCastItems] = useState([]);
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    function fetchCastItems(moviesId) {
      fethTmdbAPI(`movie/${moviesId}/credits`)
        .then(resp => {
          setCastItems([...resp.cast]);
        })
        .catch(error => {
          console.error(error);
          setIsError(true);
        })
        .finally(() => {
          setIsError(false);
        });
    }

    fetchCastItems(moviesId);
  }, [moviesId]);

  return (
    <CastContainer>
      {!isError && (
        <CastList>
          {castItems.map(item => {
            return (
              <CastItem key={item.id}>
                <CastDeskContainer>
                  <CastImg
                    src={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                        : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                    }
                    alt={item.name}
                  />

                  <p>{item.name}</p>
                  <p>
                    Character: <span>{item.character}</span>
                  </p>
                </CastDeskContainer>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </CastContainer>
  );
}
