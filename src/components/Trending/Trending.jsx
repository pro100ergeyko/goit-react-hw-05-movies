import fethTmdbAPI from 'helpers/TmdbAPI';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Title, Wraper } from './Trending.styled';
import { TrendingList } from 'components/TrendingList/TrendingList';
// import { useLocation } from 'react-router-dom';

export const Trending = () => {
  const [trendingItems, setTrendingItems] = useState([]);
  const [isLoding, setIsLoding] = useState(true);
  const [isError, setIsError] = useState(true);
  // const location = useLocation();

  useEffect(() => {
    function fetchTrendingItems() {
      fethTmdbAPI('trending/all/day')
        .then(resp => {
          setTrendingItems([...resp.results]);
        })
        .catch(error => {
          console.log(error);
          setIsError(true);
        })
        .finally(() => {
          setIsLoding(false);
          setIsError(false);
        });
    }
    fetchTrendingItems();
  }, []);

  return (
    <>
      {isLoding && <Loader />}
      {!isError && (
        <Wraper>
          <Title>Today trending</Title>
          <ol>
            <TrendingList trendingItems={trendingItems} />
          </ol>
        </Wraper>
      )}
    </>
  );
};
