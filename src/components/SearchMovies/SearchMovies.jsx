import { MoviesForm, MoviesInput } from './SearchMovies.styled';

export const SearchMovies = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(value);
    onChange(e.target.value);
  };

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
