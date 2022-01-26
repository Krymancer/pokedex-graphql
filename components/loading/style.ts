import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-720deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & svg {
    animation: ${rotate} ease-in-out 1s;
    animation-delay: 0.05s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
  }
`;