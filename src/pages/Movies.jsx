import { useEffect, useState } from 'react';
import fethTmdbAPI from 'helpers/TmdbAPI';
import { Loader } from 'components/Loader/Loader';
import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { SearchMovieItems } from 'components/SearchMovieItems/SearchMovieItems';

const Movies = () => {
  const [serchQuery, setSerchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    if (!serchQuery) {
      return;
    }
    function fetchMoviesGalery(serchQuery) {
      setIsLoading(true);
      setIsError(true);

      fethTmdbAPI('search/movie', { query: serchQuery })
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

    fetchMoviesGalery(serchQuery);
  }, [serchQuery]);

  const handleSearch = serchQuery => {
    setSerchQuery(serchQuery);
  };

  return (
    <>
      <SearchMovies onSubmit={handleSearch} />
      {isLoading && <Loader />}
      <ul>{!isError && <SearchMovieItems items={searchItems} />}</ul>
    </>
  );
};

export default Movies;
