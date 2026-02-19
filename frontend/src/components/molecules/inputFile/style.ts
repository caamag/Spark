import styled from "styled-components";
import { Colors } from "../../../global/colors";

export const FileContainer = styled.div`
  border: 2px dashed ${Colors.primary};
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  color: ${Colors.primary};
  font-size: 12px;
  background: white;
`;
