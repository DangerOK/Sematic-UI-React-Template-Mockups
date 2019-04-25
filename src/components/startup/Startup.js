import React from "react";
import { Grid } from "semantic-ui-react";

import StartupHeader from "./startupHeader/StartupHeader";
import Landing from "./landing/Landing";
import Blurb from "./blurb/Blurb";
import Usedby from "./usedby/Usedby";
import About from "./about/About";
import Team from "./team/Team";
import StartupFooter from "./startupFooter/StartupFooter";

const Startup = () => (
  <Grid style={{ border: "1px solid black" }}>
    <StartupHeader />
    <Landing />
    <Blurb />
    <Usedby />
    <About />
    <Team />
    <StartupFooter />
  </Grid>
);

export default Startup;
