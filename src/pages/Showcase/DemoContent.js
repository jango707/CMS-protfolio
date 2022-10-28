import React from "react";
import Markdown from "react-markdown";

const DemoContent = (props) => {
  if (!props.demo) return <IdleContent />;
  const { title, image, content } = props.demo;
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <img src={image} alt="showcase-example" />
      <Markdown id="content" source={content} escapeHtml={false} />
    </div>
  );
};

export default DemoContent;

const IdleContent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <i class="fa fa-hand-pointer fa-2x" />
      <p style={{ padding: "10px", fontWeight: "bold" }}>
        Click on a Card for details!
      </p>
    </div>
  );
};
