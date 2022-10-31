// @ts-nocheck
import { Component } from "react";
import { Perspective } from "@egjs/flicking-plugins";
import React from "react";
import { AutoPlay } from "@egjs/flicking-plugins";
import Flicking from "@egjs/react-flicking";

import "./DemoCard.css";

class DemoComponent extends Component {
  private _plugins = [
    new Perspective({ rotate: -1, scale: 2, perspective: 600 }),
    new AutoPlay({ duration: 2500, direction: "NEXT", stopOnHover: true }),
  ];

  render() {
    return (
      <Flicking
        circular={true}
        plugins={this._plugins}
        style={{ margin: "50px" }}
      >
        {this.props.demos.map((demo, i) => {
          return (
            <div
              key={i}
              id={demo.id}
              style={{
                width: this.props.isMobile ? "150px" : "250px",
                height: this.props.isMobile ? "150px" : "250px",
              }}
              className={`demo-card ${
                this.props.activeDemoId === demo.id && "active-card"
              }`}
              onClick={(event) => this.props.onCardClick(event)}
            >
              <img src={demo.thumbnail} alt="demo-thumb" />
            </div>
          );
        })}
      </Flicking>
    );
  }
}

export default DemoComponent;
