import { Component } from "react";
import { Perspective } from "@egjs/flicking-plugins";
import React from "react";
import { AutoPlay } from "@egjs/flicking-plugins";
// @ts-ignore
import Flicking from "@egjs/react-flicking";

import "./DemoCard.css";

const Demos = {};

export default class DemoComponent extends Component {
  private _plugins = [
    new Perspective({ rotate: -1, scale: 2, perspective: 600 }),
    new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: true }),
  ];

  public render() {
    return (
      <Flicking
        circular={true}
        plugins={this._plugins}
        style={{ margin: "20px" }}
      >
        <div className="demo-card">hey</div>
        <div className="demo-card">hey</div>
        <div className="demo-card">hey</div>
        <div className="demo-card">hey</div>
        <div className="demo-card">hey</div>
      </Flicking>
    );
  }
}
