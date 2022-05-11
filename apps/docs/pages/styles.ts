import styled from "@emotion/styled";

export const TestPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: #ffefde; */

  & > div {
    width: 5rem;
    margin: 0.5rem;

    &:nth-child(2) {
      transform: rotate(-90deg);
      circle {
        display: none;
      }
    }
  }
`;
