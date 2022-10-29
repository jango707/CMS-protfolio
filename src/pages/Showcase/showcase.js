import React from "react";
import { useState } from "react";
import Layout from "../../components/layout";
import DemoComponent from "./DemoComponent";
import DemoContent from "./DemoContent";

import demos from "../../showcases.json";

function Showcase() {
  const [activeDemoId, setDemoId] = useState("");
  return (
    <Layout hasFooter={false}>
      <section
        id="showcase"
        style={{
          background: `linear-gradient(to right, #f6f9fc, #f0f9fc`,
          minHeight: "100vh",
          padding: "0 15%",
        }}
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
          <DemoComponent
            onCardClick={(e) => setDemoId(e.currentTarget.id)}
            activeDemoId={activeDemoId}
            demos={demos}
          />
          <hr style={{ margin: "20px 10%" }} />
          <DemoContent demo={demos.find((d) => d.id === activeDemoId)} />
        </div>
      </section>
    </Layout>
  );
}

export default Showcase;
