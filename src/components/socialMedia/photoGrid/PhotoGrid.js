import React from "react";
import { Grid, Image } from "semantic-ui-react";

const PhotoGrid = () => (
  <Grid.Row>
    <Grid centered relaxed style={{ width: "100%" }}>
      <Grid.Row>
        <Image.Group size="medium" bodered>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            style={{ padding: "10px" }}
          />
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            style={{ padding: "10px" }}
          />
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            style={{ padding: "10px" }}
          />
        </Image.Group>

        <Image.Group size="medium" bodered>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            style={{ padding: "10px" }}
          />
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            style={{ padding: "10px" }}
          />
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            style={{ padding: "10px" }}
          />
        </Image.Group>

        <Image.Group size="medium">
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            style={{ padding: "10px" }}
          />
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            style={{ padding: "10px" }}
          />
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            style={{ padding: "10px" }}
          />
        </Image.Group>
      </Grid.Row>
    </Grid>
  </Grid.Row>
);

export default PhotoGrid;
