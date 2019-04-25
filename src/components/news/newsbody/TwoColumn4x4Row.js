import React from "react";
import { Grid } from "semantic-ui-react";

const TwoColumn4x4Row = () => (
  <Grid.Row>
    <Grid container columns="2" padded>
      <Grid.Row>
        <Grid.Column style={{ height: "500px", padding: "0" }} stretched>
          <Grid padded columns="2" rows="2">
            <Grid.Row style={{ padding: "0" }}>
              <Grid.Column style={{ backgroundColor: "lightblue" }} />
              <Grid.Column style={{ backgroundColor: "teal" }} />
            </Grid.Row>
            <Grid.Row style={{ padding: "0" }}>
              <Grid.Column style={{ backgroundColor: "teal" }} />
              <Grid.Column style={{ backgroundColor: "lightblue" }} />
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column style={{ border: "0px solid black" }} stretched>
          <Grid columns="2" rows="2" padded>
            <Grid.Row style={{ padding: "0" }}>
              <Grid.Column style={{ backgroundColor: "darkred" }} />
              <Grid.Column style={{ backgroundColor: "salmon" }} />
            </Grid.Row>
            <Grid.Row style={{ padding: "0" }}>
              <Grid.Column style={{ backgroundColor: "salmon" }} />
              <Grid.Column style={{ backgroundColor: "darkred" }} />
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Grid.Row>
);

export default TwoColumn4x4Row;
