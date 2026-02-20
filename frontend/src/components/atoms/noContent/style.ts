import styled from "styled-components";
import { Colors } from "../../../global/colors";

export const NoContentContainer = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${Colors.gray};
  border-radius: 8px;
  gap: 10px;

  p {
    font-size: 16px;
    font-weight: 400;
  }

  svg {
    font-size: 48px;
  }
`;
