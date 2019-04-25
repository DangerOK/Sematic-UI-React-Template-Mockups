import React from "react";
import { Grid, Header } from "semantic-ui-react";

const About = () => (
  <Grid.Row
    style={{
      fontSize: "16px",
      padding: " 4rem"
    }}
  >
    <Grid.Column>
      <Grid.Row columns="2">
        <Grid stackable>
          <Grid.Column width="8">
            <Header as="h3">Lorem Ipsum</Header>
            <p style={{ margin: "auto", padding: " 1rem 3rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollitanim. id est laborum.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet. consectetur adipiscing elit, sed do eiusmod tempor, sunt in
              culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Excepteur sint occaecat cupidatat
              est laborum.
            </p>
          </Grid.Column>

          <Grid.Column width="8">
            <Header as="h3">Lorem Ipsum</Header>
            <p style={{ margin: "auto", padding: "1rem 3rem " }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollitanim. id est laborum.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.Lorem ipsum dolor sit amet. consectetur adipiscing
              elit, sed do eiusmod tempor, sunt in culpa qui officia deserunt
              mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </Grid.Column>
        </Grid>
      </Grid.Row>
    </Grid.Column>
  </Grid.Row>
);

export default About;
