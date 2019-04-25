import React from "react";
import { Card } from "semantic-ui-react";

import StoreItemImage from "./StoreItemImage";

const StoreItemCard = props => (
  <Card>
    <StoreItemImage img={props.img} />
    <Card.Content extra>
      <Card.Header>Item</Card.Header>
      <Card.Meta>$15</Card.Meta>
    </Card.Content>
  </Card>
);

export default StoreItemCard;
