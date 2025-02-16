import styled from "styled-components";

export const SDropDown = styled.div`
  display: inline-block;
  cursor: pointer;
  .dropDown {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    padding: 6px 0;
    font-size: ${(props) => props.theme.fontSize.font18$14};
  }
`;

export const DropDownContent = styled.ul<{ $isOpen: boolean }>`
  background-color: transparent;
  min-width: 160px;
  padding: 12px 8px;
  border-radius: 4px;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;

  display: grid;
  gap: 26px ;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  max-height: ${({ $isOpen }) => ($isOpen ? "600px" : "0px")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  a{
    font-family: ${props => props.theme.fontFamily.roboto};
    color: white;
  }
`;
