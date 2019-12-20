import React from "react";
import "./App.sass";
import { CardsContainer } from "./components";
import { cards } from "../data/cards";
import { Section, Container } from "react-bulma-components";

const App = () => {
  return (
    <Section>
      <Container>
        <h1 className="title">Bulma</h1>
        <p className="subtitle">Modern CSS framework based on </p>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons">
          <a className="button is-primary" href="google.com">
            Primary
          </a>
          <a className="button is-link" href="google.com">
            Link
          </a>
        </div>
        <CardsContainer cards={cards} lang="DE" />
        <CardsContainer cards={cards} lang="en" />
      </Container>
    </Section>
  );
};

export default App;
