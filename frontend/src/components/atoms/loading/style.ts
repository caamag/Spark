import styled, { keyframes } from "styled-components";
import { Colors } from "../../../global/colors";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    }
    `;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: ${spin} 1s infinite;
    font-size: 30px;
    color: ${Colors.primary};
  }
`;
