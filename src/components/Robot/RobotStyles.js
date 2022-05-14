import styled from "styled-components";

export const RobotStylesCard = styled.div`
  .card {
    width: 300px;
    margin: 10px;
    background-color: white;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    height: 400px;

    &__image {
      width: 100%;
      transition: 0.5s ease-in-out;
    }

    &__title {
      display: -webkit-box;
      max-height: 85px;
      overflow: hidden;
      font-family: "Playfair Display", serif;
      font-size: 23px;
      line-height: 28px;
      text-shadow: 0px 1px 5px black;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;
