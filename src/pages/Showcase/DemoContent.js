import React from "react";
import Markdown from "react-markdown";
import { colours } from "../../colors";

const DemoContent = (props) => {
  if (!props.demo) return <IdleContent />;
  const { title, images, content, tags } = props.demo;
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      {tags.map((tag, i) => {
        return <Tag name={tag} key={i} />;
      })}
      <br />
      <Markdown id="content" source={content} escapeHtml={false} />
      {images.map((image, i) => {
        return <img src={image} alt={"gallery-img" + i} key={i} />;
      })}
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
