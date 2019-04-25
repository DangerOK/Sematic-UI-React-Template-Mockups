import React from "react";
import { Menu, Header, Segment } from "semantic-ui-react";

const HeaderNav = props => (
  <Segment
    textAlign="center"
    inverted
    color="blue"
    style={{
      padding: "14px 0 0"
    }}
  >
    <Header as="h1">Sematic-UI-React Template Mockups</Header>
    <Menu
      inverted
      style={{
        backgroundColor: "#112",
        justifyContent: "center"
      }}
    >
      <Menu.Menu>
        {props.layouts.map(layout => (
          <Menu.Item key={layout} id={layout} onClick={props.onClick}>
            {layout}
          </Menu.Item>
        ))}
      </Menu.Menu>
    </Menu>
  </Segment>
);

export default HeaderNav;
