import styled from "@emotion/styled";

export const TestPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background-color: #ffefde;

  .container {
    width: 20rem;

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .eye {
    width: 5rem;
    top: 57% !important;
  }
`;
