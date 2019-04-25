import React from "react";
import { Grid } from "semantic-ui-react";

const TwoColumn1x3Row = () => (
  <Grid.Row>
    <Grid columns="2" padded>
      <Grid.Row>
        <Grid.Column
          width="11"
          style={{ height: "500px", backgroundColor: "orange" }}
        />
        <Grid.Column width="5" style={{ border: "0px solid black" }} stretched>
          <Grid columns="2" padded>
            <Grid.Row style={{ padding: "0" }}>
              <Grid.Column style={{ backgroundColor: "darkblue" }} />
              <Grid.Column style={{ backgroundColor: "darkred" }} />
              <Grid.Column
                width="16"
                style={{ backgroundColor: "darkgreen" }}
              />
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Grid.Row>
);

export default TwoColumn1x3Row;
