import React from "react";
import { Grid, Card } from "semantic-ui-react";

import StoreItemCard from "../storeItemCard/StoreItemCard";

const Store = () => (
  <Grid.Row
    style={{
      backgroundColor: "salmon"
    }}
    align="center"
  >
    <Card.Group centered itemsPerRow="4" style={{ padding: "3rem 5rem" }}>
      <StoreItemCard img="https://images-na.ssl-images-amazon.com/images/I/61C4v%2Bk1p7L._UX679_.jpg" />
      <StoreItemCard img="http://images.clipartpanda.com/aviator-sunglasses-png-RB3025-16.png" />
      <StoreItemCard img="http://pngimg.com/uploads/watches/watches_PNG9877.png" />
      <StoreItemCard img="http://images.clipartpanda.com/aviator-sunglasses-png-RB3025-16.png" />

      <StoreItemCard img="https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_960_720.png" />
      <StoreItemCard img="https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_960_720.png" />
      <StoreItemCard img="https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_960_720.png" />
      <StoreItemCard img="https://cdn.pixabay.com/photo/2017/01/13/04/56/blank-1976334_960_720.png" />

      <StoreItemCard img="http://images.skipantsi.com/l-m/water-repellent-windproof-softshell-fleece-MRxTtX1npHW4Zg.jpg" />
      <StoreItemCard img="http://images.skipantsi.com/l-m/water-repellent-windproof-softshell-fleece-MRxTtX1npHW4Zg.jpg" />
      <StoreItemCard img="http://images.skipantsi.com/l-m/water-repellent-windproof-softshell-fleece-MRxTtX1npHW4Zg.jpg" />
      <StoreItemCard img="http://images.skipantsi.com/l-m/water-repellent-windproof-softshell-fleece-MRxTtX1npHW4Zg.jpg" />
    </Card.Group>
  </Grid.Row>
);

export default Store;
