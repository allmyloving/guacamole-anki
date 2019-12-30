import React, { useState } from "react";
import { Section, Container, Loader } from "react-bulma-components";
import { MainContainer } from "./components/MainContainer";
import "./App.sass";

const styles = {
  spinner: {
    position: "absolute",
    left: "50%",
    top: "50%",
    zIndex: "9999",
    width: 50,
    height: 50
  }
};

export const App = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <Section>
      {isLoading && <Loader style={styles.spinner} />}
      <Container style={{ opacity: isLoading ? "0.3" : "1" }}>
        <h1 className="title">Guacamole Anki APP</h1>
        <p className="subtitle">Hello </p>
        <MainContainer setLoading={setLoading} />
      </Container>
    </Section>
  );
};
