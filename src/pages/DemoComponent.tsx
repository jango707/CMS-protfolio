import { Component } from "react";
import { Perspective } from "@egjs/flicking-plugins";
import React from "react";
import { AutoPlay } from "@egjs/flicking-plugins";
// @ts-ignore
import Flicking from "@egjs/react-flicking";

import "./DemoCard.css";
import demos from "../showcases.json";
class DemoComponent extends Component {
  private _plugins = [
    new Perspective({ rotate: -1, scale: 2, perspective: 600 }),
    new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: true }),
  ];

  render() {
    return (
      <>
        <Flicking
          circular={true}
          plugins={this._plugins}
          style={{ margin: "50px" }}
        >
          {demos.map((demo, i) => {
            return (
              <div key={i} className="demo-card">
                <img src={demo.thumbnail} alt="demo-thumb" />
              </div>
            );
          })}
          {demos.map((demo, i) => {
            return (
              <div key={i} className="demo-card">
                <img src={demo.thumbnail} alt="demo-thumb" />
              </div>
            );
          })}
          {demos.map((demo, i) => {
            return (
              <div key={i} className="demo-card">
                <img src={demo.thumbnail} alt="demo-thumb" />
              </div>
            );
          })}
          {demos.map((demo, i) => {
            return (
              <div key={i} className="demo-card">
                <img src={demo.thumbnail} alt="demo-thumb" />
              </div>
            );
          })}
        </Flicking>
        hii
      </>
    );
  }
}

export default DemoComponent;
