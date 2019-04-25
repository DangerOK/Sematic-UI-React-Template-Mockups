import React from "react";
import { Grid, List } from "semantic-ui-react";

const StartupHeader = () => (
  <Grid.Row
    style={{
      backgroundColor: "orange"
    }}
  >
    <Grid.Column>
      <Grid.Row>
        <Grid
          columns="3"
          padded
          style={{ color: "#fff", justifyContent: "space-around" }}
        >
          <Grid.Column width="7" style={{ height: "200px" }}>
            <List>
              <List.Header inverted as="h3" content="StartUp" />
              <List.Item>Item</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width="3" style={{ height: "200px" }}>
            <List>
              <List.Header inverted as="h3" content="Careers" />
              <List.Item>Positions</List.Item>
              <List.Item>Contracts</List.Item>
              <List.Item>Culure</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width="3" style={{ height: "200px" }}>
            <List>
              <List.Header inverted as="h3" content="Contact" />
              <List.Item>Startup@StartUp.com</List.Item>
              <List.Item>555-555-555</List.Item>
              <List.Item>@Startup</List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Grid.Row>
    </Grid.Column>
  </Grid.Row>
);

export default StartupHeader;
