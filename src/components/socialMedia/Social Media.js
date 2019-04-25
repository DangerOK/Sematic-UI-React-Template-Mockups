import React from "react";
import { Grid } from "semantic-ui-react";

import SocialHeader from "./socialHeader/SocialHeader";
import UserProfile from "./userProfile/UserProfile";
import Stories from "./stories/Stories";
import PostedTagged from "./postedTagged/PostedTagged";
import PhotoGrid from "./photoGrid/PhotoGrid";

const SocialMedia = () => (
  <Grid
    container
    textAlign="center"
    style={{ backgroundColor: "#fdfdfd", padding: "2rem 0 0" }}
  >
    <SocialHeader />
    <UserProfile />
    <Stories />
    <PostedTagged />
    <PhotoGrid />
  </Grid>
);
export default SocialMedia;
