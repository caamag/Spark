import Router from "./router";
import { GlobalStyle } from "./global/styles";
import { Container } from "./global/styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router />
      </Container>
    </>
  );
};

export default App;
