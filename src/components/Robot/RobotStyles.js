import styled from "styled-components";

export const RobotStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  display: flex;
  .card {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 0 auto;
    background: #92b5b1;
    border-radius: 15px;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);

    .face {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &.face1 {
        box-sizing: border-box;
        padding: 20px;
        .content {
          display: flex;
          flex-direction: column;
          .buttonContainer {
            display: flex;
            justify-content: flex-end;
            .button {
              background-color: #ec4940;
              color: white;
              padding: 14px 20px;
              margin: 8px 0;
              border: none;
              cursor: pointer;
              width: 50%;
              opacity: 0.9;
              display: flex;
              justify-content: space-around;
              font-size: 20px;
              border-radius: 15px;
            }
          }
          .details {
            background-color: #474949;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            h2 {
              margin: 0;
              padding: 0;
            }
          }
        }
      }

      &.face2 {
        transition: 0.5s;

        h2 {
          margin: 0;
          padding: 0;
          font-size: 50px;
          color: #fff;
          transition: 0.5s;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }
      }
    }
  }

  .card:hover .face.face2 {
    height: 60px;

    h2 {
      font-size: 2em;
    }
  }

  .face.face2 {
    border-radius: 15px;
  }
`;
