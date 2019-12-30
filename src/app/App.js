import React from "react";
import { Section, Container } from "react-bulma-components";
import "./App.sass";
import { MainContainer } from "./components/MainContainer";

export const App = () => {
  return (
    <Section>
      <Container>
        <h1 className="title">Guacamole Anki APP</h1>
        <p className="subtitle">Hello </p>
        <MainContainer />
      </Container>
    </Section>
  );
};
