import React from "react";
import { Grid, Image } from "semantic-ui-react";

const Stories = () => (
  <Grid.Row style={{ height: "100px" }}>
    <Grid.Column>
      <Image.Group size="tiny">
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
);

export default Stories;
