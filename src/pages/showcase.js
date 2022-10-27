import React from "react";
import Layout from "../components/layout";
import DemoComponent from "./DemoComponent";

function Showcase() {
  return (
    <Layout hasFooter={false}>
      <section
        id="projects"
        style={{ background: `linear-gradient(to right, #f6f9fc, #f0f9fc` }}
      >
        <div id="content">
          {" "}
          <h2 className=" m-4 u-center">Showcase</h2>
          <b
            style={{
              fontSize: "large",
            }}
            className=" m-4 u-center"
          >
            This page contains my highest quality work. These projects have been
            created over months in a collaborative and professional environment.
          </b>
          <DemoComponent />
        </div>
      </section>
    </Layout>
  );
}

export default Showcase;
