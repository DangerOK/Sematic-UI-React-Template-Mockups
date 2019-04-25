import React from "react";
import { Grid, List } from "semantic-ui-react";

const NewsFooter = () => (
  <Grid
    columns="5"
    style={{
      padding: "2rem 3rem 6rem"
    }}
    divided
  >
    <Grid.Row align="center">
      <Grid.Column>
        <List relaxed>
          <List.Header>
            <b>News</b>
          </List.Header>
          <List.Item>Politics</List.Item>
          <List.Item>Current Events</List.Item>
          <List.Item>World</List.Item>
          <List.Item>Breaking</List.Item>
        </List>
      </Grid.Column>

      <Grid.Column>
        <List relaxed>
          <List.Header>
            <b>Sports</b>
          </List.Header>
          <List.Item>NFL</List.Item>
          <List.Item>NBA</List.Item>
          <List.Item>MLB</List.Item>
          <List.Item>MLS</List.Item>
        </List>
      </Grid.Column>

      <Grid.Column>
        <List relaxed>
          <List.Header>
            <b>Science</b>
          </List.Header>
          <List.Item>Environment</List.Item>
          <List.Item>Engineering</List.Item>
          <List.Item>Marine</List.Item>
          <List.Item>New Discoveries</List.Item>
        </List>
      </Grid.Column>

      <Grid.Column>
        <List relaxed>
          <List.Header>
            <b>Arts</b>
          </List.Header>
          <List.Item>Film</List.Item>
          <List.Item>Music</List.Item>
          <List.Item>Fine</List.Item>
          <List.Item>Other</List.Item>
        </List>
      </Grid.Column>

      <Grid.Column>
        <List relaxed>
          <List.Header>
            <b>Subscribe</b>
          </List.Header>
          <List.Item>Newsletter</List.Item>
          <List.Item>E-mail</List.Item>
          <List.Item>Print</List.Item>
        </List>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default NewsFooter;
