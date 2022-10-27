import React from "react";
import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Layout>
      <section
        className="section bg-light"
        style={{ background: "linear-gradient(to right, #f6f9fc, #f0f9fc" }}
      >
        <div className="hero fullscreen">
          <div className="hero-body ">
            <div className="content">
              <h1>404: Page not found.</h1>
              <h6>
                Head <a href="/">Home</a>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
