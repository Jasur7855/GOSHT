import styled from "styled-components";

interface IEventCardItemProps {
  $bgImg: string;
}

export const SEventsCardItem = styled.div<IEventCardItemProps>`
  .picture {
    height: 100px;
    border-radius: 8px;
    margin-bottom: 12px;
    background-image: url(${(props) => props.$bgImg});
    background-size: cover;
    background-position: center;
  }
  h4{
    font-family:"Roboto Serif"
  }
  @media (max-width:1190px) {
    .picture {
      height: calc(14.6vw + 45.26px);
    }
  }
`;
