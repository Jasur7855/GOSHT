import styled from "styled-components";

export const SFormKidsEvent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 20px calc(3vw + 8.7px);
  h4 {
    max-width: 606px;
    text-align: center;
    font-weight: 500;
    font-family: ${(props) => props.theme.fontFamily.robotoSerif};
    margin-bottom: calc(1.9vw + 13px);
  }
  form {
    display: flex;
    min-width: 802px;
    flex-direction: column;
    gap: calc(1.7vw + 5.6px) 0;
    .formFlex {
      display: flex;
      justify-content: space-between;
      gap: 0 30px;
    }
    label{
        width: 100%;
        input{
        width: 100%;
    }
    }
  }
`;
