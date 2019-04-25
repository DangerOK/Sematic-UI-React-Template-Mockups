import React from "react";
import { Grid, Container } from "semantic-ui-react";

import TwoColumn1x2Row from "./TwoColumn1x2Row";
import TwoColumn2x3Row from "./TwoColumn2x3Row";
import TwoColumn4x4Row from "./TwoColumn4x4Row";
import TwoColumn1x3Row from "./TwoColumn1x3Row";

const NewsBody = () => (
  <Container>
    <Grid>
      <TwoColumn1x2Row />
      <TwoColumn2x3Row />
      <TwoColumn4x4Row />
      <TwoColumn1x3Row />
    </Grid>
  </Container>
);

export default NewsBody;
