import styled from "styled-components";
import { Colors } from "../../../global/colors";

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${Colors.gray};
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: ${Colors.primary};
  }
`;
