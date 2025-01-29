import styled from "styled-components";

export const SLableText = styled.label`
  font-size: ${(props) => props.theme.fontSize.font16$12};
  display: block;
  font-family: ${props=>props.theme.fontFamily.roboto};
  div{
    
    margin-top: 8px;
    display: flex;
    gap: 0 10px;
    padding: 16px;
    border-radius: 12px;
    background-color: #fff;
    border: 1px solid #00000033;
    svg{
        font-size: 24px;
        color: #8C8E91;
    }
    input,textarea{
        display: block;
        width: 100%;
        outline: none;
        border: none;
        background-color: #fff;
        font-size: ${(props) => props.theme.fontSize.font16$12};
        resize: none;
    }
    
  }
  p{
    margin-top: 10px;
    color: ${props=>props.theme.colors.red};
  }
`;
