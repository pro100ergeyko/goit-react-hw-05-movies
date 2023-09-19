// import { useEffect, useRef, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { FcSearch } from 'react-icons/fc';
import { MoviesForm, MoviesInput } from './SearchMovies.styled';

export const SearchMovies = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  // const [nextSerchQuery, setNextSerchQuery] = useState('');
  // const [prevSerchQuery, setPrevSerchQuery] = useState('');
  // const [serchParams, setSerchParams] = useSearchParams();
  // const findMovies = serchParams.get('findMovies') ?? '';

  // const isFirstSearch = useRef(true);

  // const handleChange = evt => {
  //   const value = evt.currentTarget.value;
  //   if (value === '') {
  //     setNextSerchQuery('');
  //     setSerchParams({});
  //     return;
  //   }

  //   setSerchParams({ findMovies: value });
  //   setNextSerchQuery(value);
  // };

  // const handleSubmit = evt => {
  //   evt.preventDefault();

  //   if (!nextSerchQuery) {
  //     toast.info("👈 Please don't be stupid, enter the search value.");
  //     return;
  //   }

  //   if (nextSerchQuery === prevSerchQuery) {
  //     toast.info(
  //       `${nextSerchQuery} - be creative 😊, enter a new search value 👍`
  //     );
  //     return;
  //   }

  //   setPrevSerchQuery(nextSerchQuery);
  //   props.onSubmit(nextSerchQuery);
  //   setNextSerchQuery('');
  // };

  // useEffect(() => {
  //   if (findMovies && isFirstSearch.current) {
  //     setPrevSerchQuery(findMovies);
  //     props.onSubmit(findMovies);
  //   }
  //   isFirstSearch.current = false;
  // }, [setPrevSerchQuery, props, findMovies, isFirstSearch]);

  return (
    <>
      <MoviesForm onSubmit={handleSubmit}>
        <MoviesInput
          className="MoviesInput"
          type="text"
          name="nextSerchQuery"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {/* <MoviesButton type="submit">
          <FcSearch />
          Search
        </MoviesButton> */}
      </MoviesForm>
    </>
  );
};
