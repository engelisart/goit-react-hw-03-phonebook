import styled from 'styled-components';

export const FilterContacts = styled.label`
  font-size: 20px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FilterInput = styled.input`
  width: 150px;
  height: 20px;
  border: 1px solid #9f9f9ff7;
  border-radius: 5px;
  outline: none;

  &:hover,
  :focus,
  :focus-visible {
    border: 1px solid #0981d6;
    -webkit-box-shadow: 0px 0px 14px 0px rgba(9, 129, 214, 1);
    -moz-box-shadow: 0px 0px 14px 0px rgba(9, 129, 214, 1);
    box-shadow: 0px 0px 14px 0px rgba(9, 129, 214, 1);
  }
`;
