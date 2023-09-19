import { useEffect, useState } from 'react';
import fethTmdbAPI from 'helpers/TmdbAPI';
import { Loader } from 'components/Loader/Loader';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [serchQuery, setSerchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [searchItems, setSearchItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const findMovies = searchParams.get('findMovies') ?? '';

  useEffect(() => {
    if (!findMovies) {
      setSearchItems([]);
      return;
    }
    function fetchMoviesGalery(findMovies) {
      setIsLoading(true);
      setIsError(true);

      fethTmdbAPI('search/movie', { query: findMovies })
        .then(resp => {
          setSearchItems([...resp.results]);
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
          setIsError(false);
        });
    }

    fetchMoviesGalery(findMovies);
  }, [findMovies]);

  const handleSearch = findMovies => {
    const nextParams = findMovies !== '' && { findMovies };
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchMovies value={findMovies} onChange={handleSearch} />
      {isLoading && <Loader />}
      <ul>{!isError && <MoviesList items={searchItems} />}</ul>
    </>
  );
};

export default Movies;
