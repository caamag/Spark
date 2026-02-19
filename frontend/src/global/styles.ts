import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
    }

    html {
        font-family: 'Roboto', sans-serif;
        font-size: 62.5%;
    }

    body {
        background-color: rgb(240, 240, 240);
    }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;
