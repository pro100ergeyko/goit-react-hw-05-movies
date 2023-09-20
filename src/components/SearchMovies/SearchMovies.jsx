import { useState } from 'react';
import { MoviesForm, MoviesInput } from './SearchMovies.styled';

export const SearchMovies = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // console.log(value);
    onChange(query);
  };

  return (
    <>
      <MoviesForm onSubmit={handleSubmit}>
        <MoviesInput
          className="MoviesInput"
          type="text"
          name="nextSerchQuery"
          value={query}
          onChange={handleChange}
        />
        {/* <MoviesButton type="submit">
          <FcSearch />
          Search
        </MoviesButton> */}
      </MoviesForm>
    </>
  );
};
