import styled from "styled-components";
import { Colors } from "../../../global/colors";

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid ${Colors.gray};
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  resize: none;

  &:focus {
    border-color: ${Colors.primary};
  }
`;
