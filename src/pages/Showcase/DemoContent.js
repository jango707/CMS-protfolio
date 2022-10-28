import React from "react";
import Markdown from "react-markdown";
import { colours } from "../../colors";

const DemoContent = (props) => {
  if (!props.demo) return <IdleContent />;
  const { title, image, content, tags } = props.demo;
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      {tags.map((tag, i) => {
        return <Tag name={tag} key={i} />;
      })}
      <br />
      <Markdown id="content" source={content} escapeHtml={false} />
      <Banner image={image} />
    </div>
  );
};

export default DemoContent;

const IdleContent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <i className="fa fa-hand-pointer fa-2x" />
      <p style={{ padding: "10px", fontWeight: "bold" }}>
        Click on a Card for details!
      </p>
    </div>
  );
};

const Tag = ({ name }) => {
  return (
    <span
      style={{
        marginRight: "5px",
        padding: "3px 6px",
        backgroundColor: colours.grey,
        color: "white",
        borderRadius: "3px",
        opacity: 0.5,
        fontSize: "small",
      }}
    >
      {name}
      <i style={{ marginLeft: "5px" }} className="fa fa-light fa-tag" />
    </span>
  );
};

const Banner = ({ image }) => {
  return (
    <div
      style={{
        width: "100%",
        maxHeight: "200px",
        overflow: "hidden",
      }}
    >
      <img
        style={{ borderRadius: "5px", objectFit: "cover" }}
        width={"100%"}
        src={image}
        alt="showcase-example"
      />
    </div>
  );
};
