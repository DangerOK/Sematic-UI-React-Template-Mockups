import React from "react";
import { Grid, Container } from "semantic-ui-react";

const TwoColumn1x2Row = () => (
  <Grid.Row>
    <Container>
      <Grid padded divided columns="2">
        <Grid.Row>
          <Grid.Column
            width="12"
            style={{
              height: "500px",
              backgroundColor: "lightblue"
            }}
          />
          <Grid.Column rows="2" width="4" stretched>
            <Grid padded>
              <Grid.Row stretched style={{ backgroundColor: "purple" }} />
              <Grid.Row stretched style={{ backgroundColor: "violet" }} />
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Grid.Row>
);

export default TwoColumn1x2Row;
