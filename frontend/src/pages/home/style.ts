import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
`;

export const SubmitContainer = styled.div`
  width: 100%;
  padding: 0px 40px;
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 300px;
  }
`;

export const ForomField = styled.div`
  width: 90%;
  max-width: 800px;
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;
