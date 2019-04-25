import React from "react";
import { Container } from "semantic-ui-react";

import NewsHeader from "./NewsHeader";
import NewsBody from "./newsbody/NewsBody";
import NewsFooter from "./NewsFooter";

const News = () => (
  <Container style={{ backgroundColor: "#fffeff" }}>
    <NewsHeader />
    <NewsBody />
    <NewsFooter />
  </Container>
);
export default News;
