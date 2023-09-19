import { Link, useLocation } from 'react-router-dom';
import { Item, NothingWasFound } from './MoviesList.styled';

export const MoviesList = ({ items }) => {
  const location = useLocation();

  return items.length !== 0 ? (
    items.map(item => {
      return (
        <Item key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title || item.name}
          </Link>
        </Item>
      );
    })
  ) : (
    <li>
      <NothingWasFound>
        Nothing was found for your request 🤔. <br />
        Change it, search again 😉
      </NothingWasFound>
    </li>
  );
};
