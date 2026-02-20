import styled from "styled-components";
import { Colors } from "../../../global/colors";

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${Colors.gray};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;

  &:focus {
    border-color: ${Colors.primary};
    outline: none;
  }

  &:disabled {
    background-color: ${Colors.gray};
    cursor: not-allowed;
  }
`;
