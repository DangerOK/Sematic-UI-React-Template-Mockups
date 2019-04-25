import React from "react";
import { Grid } from "semantic-ui-react";

const Usedby = () => (
  <Grid.Row
    style={{
      padding: "2rem",
      backgroundColor: "#fdfdfd",
      fontSize: "16px"
    }}
    align="center"
  >
    <Grid.Column>
      <Grid.Row>
        <span>
          <b>Used By: </b>
        </span>
        <p style={{ margin: "auto", display: "inline-block" }}>
          Amazon, Google, Zombo, E-Corp, PlanetExpress
        </p>
      </Grid.Row>
    </Grid.Column>
  </Grid.Row>
);

export default Usedby;
