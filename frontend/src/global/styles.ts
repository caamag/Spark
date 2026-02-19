import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
    }

    html {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
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
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: 95%;
  padding: 20px;
`;
