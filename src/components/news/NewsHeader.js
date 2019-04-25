import React from "react";
import { Header, Menu, Container } from "semantic-ui-react";

const NewsHeader = () => (
  <Container>
    <Header as="h1" align="middle" style={{ fontSize: "40px" }}>
      The News
    </Header>
    <Menu
      borderless
      color="blue"
      size="tiny"
      style={{ justifyContent: "center", boxShadow: "none" }}
    >
      <Menu.Menu>
        <Menu.Item>Sports</Menu.Item>
        <Menu.Item>Politics</Menu.Item>
        <Menu.Item>Style</Menu.Item>
        <Menu.Item>Tech</Menu.Item>
        <Menu.Item>Opinion</Menu.Item>
        <Menu.Item>Books</Menu.Item>
        <Menu.Item>Food</Menu.Item>
        <Menu.Item>Travel</Menu.Item>
        <Menu.Item>World</Menu.Item>
      </Menu.Menu>
    </Menu>
  </Container>
);
export default NewsHeader;
