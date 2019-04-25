import React from "react";
import { Grid } from "semantic-ui-react";

const PostedTagged = () => (
  <Grid.Row style={{ border: "" }}>
    <Grid.Column>
      <div
        style={{
          height: "30px",
          width: "100px",
          padding: "3px",
          margin: "5px",
          border: "1px solid purple",
          display: "inline-block"
        }}
      >
        Posted
      </div>
      <div
        style={{
          height: "30px",
          width: "100px",
          padding: "3px",
          margin: "5px",
          border: "1px solid lightblue",
          display: "inline-block"
        }}
      >
        Tagged
      </div>
    </Grid.Column>
  </Grid.Row>
);

export default PostedTagged;
