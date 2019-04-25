import React from "react";
import { Grid, Menu } from "semantic-ui-react";

const StoreHeader = () => (
  <Grid.Row
    style={{ backgroundColor: "darkred", padding: "0", marginTop: ".5rem" }}
  >
    <Menu fluid inverted style={{ backgroundColor: "#112" }}>
      <Menu.Item as="h3">WebStore</Menu.Item>
    </Menu>
  </Grid.Row>
);

export default StoreHeader;
