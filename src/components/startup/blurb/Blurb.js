import React from "react";
import { Grid, Header } from "semantic-ui-react";

const Blurb = () => (
  <Grid.Row
    style={{
      padding: "2rem",
      backgroundColor: "#112",
      fontSize: "16px",
      color: "white"
    }}
  >
    <Grid.Column>
      <Grid.Row>
        <Header inverted as="h3" align="left">
          Blurb
        </Header>
        <p style={{ margin: "auto" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </Grid.Row>
    </Grid.Column>
  </Grid.Row>
);

export default Blurb;
