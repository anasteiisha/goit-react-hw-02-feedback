import styled from 'styled-components';

export const List = styled.ul`
display: flex;
list-style: none;
 
`;

export const Items = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
  button {
    padding: 3px 10px;
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
    border: 1px solid rgb(219, 216, 216);
    border-radius: 4px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,
      rgba(0, 0, 0, 0.2) 0px 1px 0px;
    &:active {
      background-color: rgb(99 149 241);
    }
  }
`;
