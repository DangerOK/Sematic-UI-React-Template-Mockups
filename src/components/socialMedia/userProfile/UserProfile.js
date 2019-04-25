import React from "react";
import { Grid, Header, List, Image } from "semantic-ui-react";

const UserProfile = () => (
  <Grid.Row style={{ height: "400px" }}>
    <Grid columns="2" verticalAlign="middle" style={{ padding: "0 10rem" }}>
      <Grid.Row columns="2">
        <Grid.Column width="4">
          <Image
            size="medium"
            circular
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          />
        </Grid.Column>
        <Grid.Column width="12" textAlign="left">
          <div>
            <Header as="h3">Firstname Lastname</Header>
            <List horizontal size="large">
              <List.Item>354 Posts</List.Item>
              <List.Item>1234 Followers</List.Item>
              <List.Item>300 Following</List.Item>
            </List>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Grid.Row>
);

export default UserProfile;
