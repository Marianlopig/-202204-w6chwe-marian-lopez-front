import styled from "styled-components";

export const NavigationStyles = styled.div`
  .header {
    background-color: #545656;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 350px;

    .header__logoContainer {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        width: 150px;
      }
    }
    li {
      list-style: none;
    }

    &__nav {
      display: flex;
    }

    &__icon {
      display: flex;
      flex-direction: row;
      width: 350px;
      justify-content: space-between;
      padding: 0;
      margin: -40px 0px 0px 0px;

      svg {
        height: 50px;
        width: auto;
        color: #92b5b1;
      }
    }
  }
`;
