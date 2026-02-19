import styled, { css } from "styled-components";
import { Colors } from "../../../global/colors";

interface ButtonProps {
  isPrimary?: boolean;
  isDanger?: boolean;
  isEmpty?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 1.5rem 2.5rem;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: all 150ms ease;
  border: none;

  ${({ isPrimary, isDanger, isEmpty }) => {
    if (isPrimary) {
      return css`
        background: ${Colors.primary};
        color: white;

        &:hover {
          background-color: ${Colors.secundary};
        }
      `;
    }

    if (isDanger) {
      return css`
        background: ${Colors.red};
        color: white;

        &:hover {
          background: ${Colors.darkRed};
        }
      `;
    }

    if (isEmpty) {
      return css`
        background: transparent;
        color: ${Colors.primary};
        border: none;

        &:hover {
          background: ${Colors.secundary};
          color: white;
        }
      `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
