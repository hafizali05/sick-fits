import React, { Component } from "react";
import Link from "next/link";
export default class index extends Component {
  render() {
    return (
      <div>
        <p>this is index file</p>
        <Link href="/sell">
          <a>go to sell</a>
        </Link>
      </div>
    );
  }
}
