import styled from 'styled-components';

export const ContactItem = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
export const ContactItemButton = styled.button`
  height: 20px;
  border: 1px solid #b9b9b9f7;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;

  font-size: 12px;
  font-weight: 400;
  color: #555555;

  &:hover {
    background-color: #1977bb;
    color: white;
  }
`;
