import styled from "styled-components";

export const RobotsListStyles = styled.div`
  /* margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Righteous", cursive;
  min-height: 100vh;
  background-color: #e5eaea; */

  .container {
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 35px;
    margin: 0 auto;
    padding: 40px 0;

    .card:hover .face.face2 {
      height: 60px;

      h2 {
        font-size: 2em;
      }
    }

    .card:nth-child(1) .face.face2 {
      background-image: linear-gradient(
        40deg,
        #fffc00 0%,
        #fc00ff 45%,
        #00fffc 100%
      );
      border-radius: 15px;
    }

    .card:nth-child(2) .face.face2 {
      background-image: linear-gradient(
        40deg,
        #fc00ff 0%,
        #00fffc 45%,
        #fffc00 100%
      );
      border-radius: 15px;
    }

    .card:nth-child(3) .face.face2 {
      background-image: linear-gradient(
        40deg,
        #00fffc 0%,
        #fc00ff 45%,
        #fffc00 100%
      );
      border-radius: 15px;
    }
  }
`;
