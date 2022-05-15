import styled from "styled-components";

export const AddRobotStyles = styled.div`
  display: flex;
  .card {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 0 auto;
    background: #92b5b1;
    border-radius: 15px;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
    .icon {
      width: 100%;
      height: 100%;
      opacity: 0.5;
      transition: transform 0.3s;
    }
    .icon:hover {
      transform: scale(0.9);
    }
  }
`;
