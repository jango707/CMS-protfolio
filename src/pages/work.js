import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

import works from "../works.json";
import "./work.css";

const Work = () => {
  return (
    <Layout>
      <section
        id="work"
        style={{ background: `linear-gradient(to right, #f6f9fc, #f0f9fc` }}
      >
        <div id="content">
          <h1 className=" m-6 u-center">My Work Experiences</h1>
          {works.map((work, i) => {
            return works.map((w) => {
              if (w.id === i + 1) {
                return <WorkCard key={i} work={w} />;
              } else return "";
            });
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Work;

const WorkCard = (props) => {
  const title = props.work.title;
  const company = props.work.company;
  const companyLink = props.work.companyLink;
  const demo = props.work.demo;
  const timePeriod = props.work.timePeriod;
  const image = props.work.thumbnail;
  const md_text = props.work.content;

  return (
    <div className="card">
      <div className="row">
        <div className="col-4 image p-4 u-center">
          <img src={image} alt="work-thumbnail" />
        </div>
        <div className="col-8 p-4">
          <h3>{title}</h3>
          <a href={companyLink} rel="noopener noreferrer" target="_blank">
            @{company}
          </a>
          <p id="timePeriod">{timePeriod}</p>
          <ReactMarkdown>{md_text}</ReactMarkdown>
          <p>
            Demo:{" "}
            <a href={demo} rel="noopener noreferrer" target="_blank">
              {demo}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
