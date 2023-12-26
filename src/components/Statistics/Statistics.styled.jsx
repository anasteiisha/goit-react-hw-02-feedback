import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const Items = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  p {
    font-size: 24px;
  }
`;
