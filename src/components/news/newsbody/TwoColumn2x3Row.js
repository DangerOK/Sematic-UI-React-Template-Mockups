import React from "react";
import { Grid } from "semantic-ui-react";

const TwoColumn2x3Row = () => (
  <Grid.Row>
    <Grid padded divided columns="2">
      <Grid.Row>
        <Grid.Column
          rows="2"
          width="12"
          style={{ height: "500px", border: "", padding: "0" }}
        >
          <Grid rows="2" style={{ margin: "0", height: "100%" }}>
            <Grid.Row stretched style={{ backgroundColor: "orange" }} />
            <Grid.Row stretched style={{ backgroundColor: "black" }} />
          </Grid>
        </Grid.Column>
        <Grid.Column width="4" stretched style={{ border: "0px solid black" }}>
          <Grid.Row stretched style={{ backgroundColor: "darkblue" }} />
          <Grid.Row stretched style={{ backgroundColor: "lavender" }} />
          <Grid.Row stretched style={{ backgroundColor: "pink" }} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Grid.Row>
);

export default TwoColumn2x3Row;
