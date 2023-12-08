import styled from 'styled-components';

export const ContactsForm = styled.form`
  width: 300px;
  height: 150px;
  padding: 15px;
  border: 1px solid #626262f7;
  background-color: #f1fbef;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const LabelForm = styled.label`
  font-size: 18px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Input = styled.input`
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
export const Button = styled.button`
  height: 20px;
  border: 1px solid #9f9f9ff7;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;

  font-size: 12px;
  font-weight: 400;

  &:hover {
    background-color: #1977bb;
    color: white;
  }
`;
