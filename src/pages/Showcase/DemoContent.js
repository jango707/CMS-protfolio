import React from "react";
import Markdown from "react-markdown";

const DemoContent = (props) => {
  if (!props.demo) return <IdleContent />;
  const { title, thumbnail, image, content, id } = props.demo;
  return (
    <div>
      {title}
      <Markdown source={content} escapeHtml={false} />
    </div>
  );
};

export default DemoContent;

const IdleContent = () => {
  return <div>idle</div>;
};
