import React from "react";

import Container from "react-bootstrap/Container";

// Constant Components
import Header from "./components/header";
import ContentBody from "./components/content-body";
import Footer from "./components/footer";

// routes
import routes from "./util/routes";

function App() {
  return (
    <Container>
      <Header routes={routes} />
      <ContentBody />
      <Footer />
    </Container>
  );
}

export default App;
