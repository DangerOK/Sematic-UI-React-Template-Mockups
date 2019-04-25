import React, { Component } from "react";
// import { Container } from "semantic-ui-react";

import HeaderNav from "./components/headerNav/HeaderNav";
import News from "./components/news/News";
import Startup from "./components/startup/Startup";
import WebStore from "./components/webStore/WebStore";
import SocialMedia from "./components/socialMedia/Social Media";

class App extends Component {
  state = {
    layouts: ["News", "Startup", "WebStore", "Social Media"],
    layout: "News"
  };

  layoutOnClick = e => {
    this.setState({
      layout: e.target.id
    });
    console.log(this.state.layout);
  };

  activeLayout = () => {
    switch (this.state.layout) {
      case "News":
        return <News />;
      case "Startup":
        return <Startup />;
      case "WebStore":
        return <WebStore />;
      case "Social Media":
        return <SocialMedia />;
      default:
        return <News />;
    }
  };

  render() {
    return (
      <div className="App">
        <HeaderNav layouts={this.state.layouts} onClick={this.layoutOnClick} />
        {this.activeLayout()}
      </div>
    );
  }
}

export default App;
