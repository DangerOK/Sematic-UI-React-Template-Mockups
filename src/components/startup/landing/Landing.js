import React from "react";
import { Grid, Header } from "semantic-ui-react";

const Landing = () => (
  <Grid.Row
    style={{
      height: "70vh",
      backgroundColor: "orange",
      padding: "1rem 2rem"
    }}
  >
    <Grid.Column>
      <Grid.Row>
        <Header as="h2">Landing video/image</Header>
      </Grid.Row>
    </Grid.Column>
  </Grid.Row>
);

export default Landing;
