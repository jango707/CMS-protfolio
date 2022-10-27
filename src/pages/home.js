import React from "react";

import Layout from "../components/layout";
import "./homeAnimation.css";

const Home = () => {
  var hexArray = ["#000", "#105157", "#0a616a", "#114448"];
  function getRandomColor() {
    return hexArray[Math.floor(Math.random() * hexArray.length)];
  }
  function onButton(e) {
    window.location.assign("/" + e.target.name);
  }
  return (
    <div>
      <Layout hasFooter={false}>
        <section
          className="section"
          style={{ background: "linear-gradient(to right, #f6f9fc, #f0f9fc" }}
        >
          <div className="hero fullscreen">
            <div className="hero-body">
              <div className="content">
                <div className="row">
                  <div className="col-12">
                    <h1>Welcome to my website portfolio.</h1>
                    <h4 className="font-alt font-light">
                      Check out what I have been up to.{" "}
                      <b className="text-teal-700">Enjoy!</b>
                    </h4>
                    <div className="animated fadeIn row u-text-center">
                      <div className="col-12">
                        <button
                          name="about"
                          onClick={onButton}
                          className="btn-light capitalize"
                          style={{ fontSize: "20px" }}
                        >
                          About Me
                        </button>
                        <button
                          name="work"
                          onClick={onButton}
                          className=" btn-light capitalize"
                          style={{ fontSize: "20px" }}
                        >
                          Work Experience
                        </button>
                        <button
                          name="projects"
                          onClick={onButton}
                          className="btn-light capitalize"
                          style={{ fontSize: "20px" }}
                        >
                          Projects
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <ul className="circles">
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
        <li style={{ backgroundColor: getRandomColor() }}></li>
      </ul>
    </div>
  );
};

export default Home;
