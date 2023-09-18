import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkContainher = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  font-weight: 600;
  padding: 5px;
  border: 2px solid #03a7ff;
  border-radius: 4px;
`;

export const MoviesContainer = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const MovieTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #ff0077b6;
`;

export const MovieCaptions = styled.h4`
  font-size: 20px;
  padding-bottom: 10px;
`;

export const GenreItem = styled.span`
  margin-right: 10px;
`;

export const GenreUnknown = styled.span`
  font-weight: 600;
  font-size: 18px;
`;
