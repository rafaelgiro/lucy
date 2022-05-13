import styled from "@emotion/styled";

export const TestPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background-color: #ffefde;
  overflow: hidden;

  .container {
    width: 100vw;

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .moon {
    width: 25%;
    max-width: 40rem;
    top: 40% !important;
  }

  .hand {
    width: 30%;
    top: 48% !important;
    max-width: 9rem;
  }

  .smoke {
    width: 120%;
    top: 20% !important;
    left: calc(50% + 2rem) !important;
    max-width: 30rem;
  }

  .eye {
    width: 20%;
    top: 55% !important;
    max-width: 7rem;
  }

  .triangle {
    width: 100%;
    max-width: 30rem;
  }
`;
