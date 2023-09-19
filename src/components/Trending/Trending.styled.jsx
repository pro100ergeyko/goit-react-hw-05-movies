import styled from 'styled-components';

export const Wraper = styled.div`
  padding: 40px 20px 0 20px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  font-size: 18px;
  margin-bottom: 8px;

  :hover {
    cursor: pointer;
    font-weight: 600;
    color: #fc075d;
  }
`;
