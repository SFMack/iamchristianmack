import React from "react";

// Constant Components
import Header from "./components/header";
import ContentBody from "./components/content-body";
import Footer from "./components/footer";

import Container from "react-bootstrap/Container";

// routes
import routes from "./util/routes";

function App() {
  return (
    <>
      <Container className="p-0">
        <Header routes={routes} />
        <ContentBody />
        <Footer />
      </Container>
    </>
  );
}

export default App;
