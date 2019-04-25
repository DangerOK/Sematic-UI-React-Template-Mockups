import React from "react";
import { Grid } from "semantic-ui-react";

import Landing from "./landing/Landing";
import MensWomensSelector from "./mensWomensSelector/MensWomensSelector";
import DropdownMenu from "./dropdownMenu/DropdownMenu";
import Store from "./store/Store";
import StoreHeader from "./storeHeader/StoreHeader";
import StoreFooter from "./storeFooter/StoreFooter";

const WebStore = () => (
  <Grid padded textAlign="center">
    <StoreHeader />
    <Landing />
    <MensWomensSelector />
    <DropdownMenu />
    <Store />
    <StoreFooter />
  </Grid>
);

export default WebStore;
