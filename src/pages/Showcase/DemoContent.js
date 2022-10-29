import React from "react";
import Markdown from "react-markdown";
import { colours } from "../../colors";
import GalleryComponent from "./GalleryComponent";

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
      <br />
      <Markdown id="content" source={content} escapeHtml={false} />
      <GalleryComponent images={images} />
      <br />
      <a href="showcase">Back to top ⇡</a>
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
