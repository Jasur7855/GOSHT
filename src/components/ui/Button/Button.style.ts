import styled from "styled-components";

export const SButton = styled.button`
  height: 48px;
  border-radius:4px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  font-family:  ${props=>props.theme.fontFamily.robotoSerif};
  font-size: 16px;
  font-weight: 400;
  color: white;

  &.fill {
    background-color: ${props=>props.theme.colors.red};
    width: fit-content;
    padding: 12px 24px;
    border-radius:4px;
  }

  &.outlined {
    background-color: transparent;
    padding: 12px 24px;
    border: 1px solid rgba(26, 26, 26, 0.5);
    color: #1a1a1a;
    width: fit-content;
    border-radius: 4px;
  }
  span{
    margin-left: 5px;
    color: ${props=>props.theme.colors.red};
  }
  @media (max-width: 875px) {
    flex-direction: column;

    &.outlined {
      width: 100% !important;
    }
  }
`;
