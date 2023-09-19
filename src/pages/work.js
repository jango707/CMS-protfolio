import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";

import works from "../works.json";
import "./work.css";

const Work = () => {
  return (
    <Layout>
      <section id="work">
        <div id="content">
          <h1 className=" m-6 u-center"> </h1>
          {works
            .sort(
              (a, b) =>
                //based on id
                parseInt(a.id) - parseInt(b.id)
            )
            .map((work, i) => (
              <WorkCard key={i} work={work} />
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default Work;

const WorkCard = (props) => {
  console.log(props);
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
        <div className="col-4 image u-center">
          <img
            src={image}
            style={{ objectFit: "contain", backgroundColor: "transparent" }}
            alt="work-thumbnail"
          />
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
