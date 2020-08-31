import React from "react";

import { Container, Background } from "./styles/app";

function App() {
  return (
    <Container>
      <Background source={require("./assets/img/background.png")} />
      <h1>Test</h1>
    </Container>
  );
}

export default App;
