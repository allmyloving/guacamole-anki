import React from "react";
import { useSelector } from "react-redux";
import { Section, Container } from "react-bulma-components";
import "./App.sass";
import { MainContainer } from "./components/MainContainer";

export const App = () => {
  const cards = useSelector(state => state.cards.cards);
  return (
    <Section>
      <Container>
        <h1 className="title">Guacamole Anki APP</h1>
        <p className="subtitle">Hello </p>
      </Container>
      <MainContainer cards={cards} />
    </Section>
  );
};
