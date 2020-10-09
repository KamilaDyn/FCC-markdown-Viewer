import React, { Component } from "react";
import Edit from "../editor/editor";
import Preview from "../preview/preview";
import placeholder from "../../placeholder";
import "./main.scss";

class Main extends Component {
  state = {
    content: placeholder
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <>
        <header>
          <h1>FCC - Markdown Viewer</h1>
        </header>
        <Edit onChange={this.handleChange} content={this.state.content} />
        <Preview content={this.state.content} />
      </>
    );
  }
}

export default Main;
