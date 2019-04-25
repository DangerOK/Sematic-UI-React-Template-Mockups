import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";

const Team = () => (
  <Grid.Row
    style={{
      backgroundColor: "#fdfdfd"
    }}
  >
    <Grid padded align="center" style={{ width: "100%" }}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h3">Our Team</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row
        style={{
          padding: "2rem 0 4rem"
        }}
        textAlign="center"
        stackable
      >
        <Grid.Column>
          <Image.Group size="small">
            <Image
              circular
              src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            />
            <Image
              circular
              src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            />
            <Image
              circular
              src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            />
          </Image.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Grid.Row>
);

export default Team;
