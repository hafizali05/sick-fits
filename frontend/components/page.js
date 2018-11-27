import React, { Component } from "react";
import Header from "./header";

export default class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>this is page file</p>

        {this.props.children}
      </div>
    );
  }
}
