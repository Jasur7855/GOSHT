import styled from "styled-components";

export const SCheckBoxLabel = styled.label`
    display: inline;
    font-family: ${props=>props.theme.fontFamily.roboto};
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    input{
        display: inline;
        width:24px !important;
        height: 24px;
        margin-right: 10px;
        border:  1px solid #00000033;
        border-radius: 4px;
        cursor: pointer;
    }
    
`