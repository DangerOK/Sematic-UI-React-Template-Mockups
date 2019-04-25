import React from "react";
import { Image } from "semantic-ui-react";

const StoreItemImage = props => (
  <div style={{ height: "300px" }}>
    <Image src={props.img} style={{ maxHeight: "100%" }} />
  </div>
);

export default StoreItemImage;
