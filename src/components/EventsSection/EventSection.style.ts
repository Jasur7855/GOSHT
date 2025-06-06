import { Button } from "./../ui/Button/Button";
import styled from "styled-components";

export const SEventSection = styled.div`
  padding: calc(0.9vw + 38.5px) calc(3.4vw + 11.3px) calc(4.7vw + 34.3px);
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-bottom: calc(0.2vw + 5.3px);
  }
  p {
    margin-bottom: calc(4.9vw + 7.7px);
    color: rgba(0, 0, 0, 0.5);
    font: calc(0.4vw + 14.6px) / 0.9 "Roboto";
  }
  .eventsWrapper {
    width: 100%;
  }
  a {
    width: 100% !important;
  }
`;
