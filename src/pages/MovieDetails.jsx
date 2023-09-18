import fethTmdbAPI from 'helpers/TmdbAPI';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Loader } from 'components/Loader/Loader';
import {
  BackLinkContainher,
  GenreItem,
  GenreUnknown,
  MovieCaptions,
  MovieTitle,
  MoviesContainer,
  StyledLink,
} from './Page.styled';

const MovieDetails = () => {
  const [isError, setIsError] = useState(true);
  const [moviesItem, setMoviesItem] = useState([]);
  const [genres, setGenres] = useState([]);
  const { moviesId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    function fetchTrendingVideos(moviesId) {
      fethTmdbAPI(`movie/${moviesId}`)
        .then(resp => {
          setMoviesItem({ ...resp });
          setGenres([...resp.genres]);
        })
        .catch(error => {
          console.log(error);
          setIsError(true);
        })
        .finally(() => {
          setIsError(false);
        });
    }
    fetchTrendingVideos(moviesId);
  }, [moviesId]);
  return (
    <>
      <BackLinkContainher>
        <StyledLink to={backLink.current}>
          <RiArrowGoBackFill /> Go back
        </StyledLink>
      </BackLinkContainher>
      {!isError && (
        <div>
          <MoviesContainer>
            <div>
              <img
                width="200px"
                src={
                  moviesItem.poster_path
                    ? `https://image.tmdb.org/t/p/w500${moviesItem.poster_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                }
                alt={moviesItem.title || moviesItem.name}
              />
            </div>
            <div>
              <MovieTitle>{moviesItem.title || moviesItem.name}</MovieTitle>

              <MovieCaptions>Overview</MovieCaptions>
              <p>{moviesItem.overview}</p>

              <MovieCaptions>Genres</MovieCaptions>
              <p>
                {genres.length !== 0 ? (
                  genres.map(genre => {
                    return <GenreItem key={genre.name}>{genre.name}</GenreItem>;
                  })
                ) : (
                  <GenreUnknown>Unknown genre</GenreUnknown>
                )}
              </p>
            </div>
          </MoviesContainer>
          <MovieCaptions>Additionsl information</MovieCaptions>
          <ul>
            <li>
              <Link to="Cast">Cast</Link>
            </li>
            <li>
              <Link to="Reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>{' '}
        </div>
      )}
    </>
  );
};

export default MovieDetails;
