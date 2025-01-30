import styled from "styled-components";

export const MenuWrapper = styled.div`
  background: white;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
`;

export const MenuItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;
