import { Link, useLocation } from 'react-router-dom';
import { Item } from './TrendingList.styled';

export const TrendingList = ({ trendingItems }) => {
  const location = useLocation();
  return (
    <>
      {trendingItems.map(item => {
        return (
          <Item key={item.id}>
            <Link to={`movies/${item.id}`} state={{ from: location }}>
              {item.title || item.name}
            </Link>
          </Item>
        );
      })}
    </>
  );
};
