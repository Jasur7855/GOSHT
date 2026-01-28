import styled from "styled-components";

export const SBurgerMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; /* Выезжает слева */
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.red};
  padding: 53px 23px 32px;
  transition: left 0.3s ease-in-out;
  box-shadow: ${({ isOpen }) =>
    isOpen ? "4px 0px 10px rgba(0,0,0,0.3)" : "none"};
 
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    img{
        width: 99px;
    }
    svg{
        font-size: 36px;
        color: #fff;
    }
  }

  nav{
    display: flex;
    justify-content: center;
    flex-direction: column;
    ul {
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    margin-bottom: 30px;
    li {
      color: white;
      text-align: center;
      cursor: pointer;
      transition: color 0.2s;
      line-height: 170%;
      &:hover {
        color: ${({ theme }) => theme.colors.lightGray};
      }
    }
  }
  .burgerBtns{
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    button{
        display: flex;
        align-items: center;
        justify-content:center;
        gap: 8px;
        padding: 15px 0;
        color: black;
        svg{
            font-size: 24px;

        }
        font-family: ${props => props.theme.fontFamily.robotoSerif};
    }
    .outline{
        background-color: transparent;
        border: 1px solid #FFFFFF80;
        span{
            color: #fff;
        }
    }
  }
  }


`;
