import styled from 'styled-components';

export const MoviesForm = styled.form`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

export const MoviesInput = styled.input`
  width: 960px;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  border-radius: 10px;
  background: #9dc470;
  border-color: #01e1ff;

  &:focus {
    border-radius: 10px;
    background: #07f91b;
  }
`;

export const MoviesButton = styled.button`
  border: 1px solid black;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
  padding: 4px;

  &:hover {
    border: 2px solid blue;
    font-weight: 600;
    border-radius: 10px;
    background-color: #c4ff01;
  }
`;
