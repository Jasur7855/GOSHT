import styled from "styled-components";

export const SMenuBadge = styled.div`
  display: inline-block;
  padding: 5px;
  background-color: #fff;
  border-radius: 4px;
  img {
    width: 20px;
    height: 20px;
  }
  p{
    display: inline-block;
    margin-left: 8px;
    font-size: 12px;
    line-height: 128%;
    color: #1A1A1A;
    font-family: ${props=>props.theme.fontFamily.robotoSerif};
  }
`;
