import React from "react";
import { Section, Container } from "react-bulma-components";
import "./App.sass";
import { CardsContainer, AddCardSection } from "./components";
import { cards } from "../data/cards";

export const App = () => {
  return (
    <Section>
      <Container>
        <h1 className="title">Guacamole Anki APP</h1>
        <p className="subtitle">Hello </p>
        <AddCardSection />
        <CardsContainer cards={cards} lang="DE" />
        <CardsContainer cards={cards} lang="en" />
      </Container>
    </Section>
  );
};
