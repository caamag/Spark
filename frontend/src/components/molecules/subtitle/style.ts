import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 40px 0px 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-right: 80px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
`;
