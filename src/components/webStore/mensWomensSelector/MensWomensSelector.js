import React from "react";
import { Grid, Button } from "semantic-ui-react";

const MensWomensSelector = () => (
  <Grid.Row
    style={{
      backgroundColor: "#002",
      padding: "0",
      margin: "0"
    }}
  >
    <Grid
      divided
      columns="2"
      style={{ margin: "0", padding: "0", width: "100%" }}
    >
      <Grid.Column style={{ margin: "0", padding: "0" }}>
        <Button
          fluid
          style={{
            fontSize: "24px",
            backgroundColor: "#002",
            color: "white"
          }}
        >
          Men
        </Button>
      </Grid.Column>
      <Grid.Column style={{ margin: "0", padding: "0" }}>
        <Button
          fluid
          style={{
            fontSize: "24px",
            backgroundColor: "#002",
            color: "white"
          }}
        >
          Women
        </Button>
      </Grid.Column>
    </Grid>
  </Grid.Row>
);

export default MensWomensSelector;
