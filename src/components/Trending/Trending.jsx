import fethTmdbAPI from 'helpers/TmdbAPI';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Title, Wraper } from './Trending.styled';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Trending = () => {
  const [trendingItems, setTrendingItems] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    function fetchTrendingItems() {
      fethTmdbAPI('trending/all/day')
        .then(data => {
          setTrendingItems([...data.results]);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoding(false);
          setError(false);
        });
    }
    fetchTrendingItems();
  }, []);

  return (
    <>
      {isLoding && <Loader />}
      {!error && (
        <Wraper>
          <Title>Today trending</Title>
          <ul>
            <TrendingList trendingItems={trendingItems} />
          </ul>
        </Wraper>
      )}
    </>
  );
};
