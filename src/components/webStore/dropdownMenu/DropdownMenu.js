import React from "react";
import { Menu, Dropdown, Grid, Container } from "semantic-ui-react";

const DropdownMenu = () => (
  <Grid.Row
    style={{
      padding: "0",
      borderBottom: "5px solid #003"
    }}
  >
    <Container>
      <Menu secondary size="large">
        <Menu.Menu position="left">
          <Dropdown item text="Season">
            <Dropdown.Menu>
              <Dropdown.Item>Summer</Dropdown.Item>
              <Dropdown.Item>Fall</Dropdown.Item>
              <Dropdown.Item>Winter</Dropdown.Item>
              <Dropdown.Item>Spring</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="Category">
            <Dropdown.Menu>
              <Dropdown.Item>Tops</Dropdown.Item>
              <Dropdown.Item>Bottoms</Dropdown.Item>
              <Dropdown.Item>Accessories</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Dropdown item text="Sort By">
            <Dropdown.Menu>
              <Dropdown.Item>Top Rated</Dropdown.Item>
              <Dropdown.Item>Most Popular</Dropdown.Item>
              <Dropdown.Item>Trending</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </Container>
  </Grid.Row>
);

export default DropdownMenu;
