import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 2200px;
  margin-top: 20px;
`;

export const Form = styled.div`
  width: 47%;
  min-width: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input {
    width: 100%;
    box-sizing: border-box;
  }

  textarea {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
  }
`;

export const FormField = styled.div`
  width: 100%;
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const UsersContent = styled.div`
  width: 47%;
  min-width: 300px;
  box-sizing: border-box;
`;

export const EmailList = styled.div`
  width: 100%;
  max-height: 450px;
  overflow-y: auto;
`;

export const EmailItem = styled.p<{ isEmpty: boolean }>`
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px 10px;
  background-color: ${(props) => (props.isEmpty ? "#f5f5f5" : "transparent")};
`;
