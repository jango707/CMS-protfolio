import React from "react";

const DemoContent = (demo) => {
  const { title } = demo;
  console.log(demo.demo);
  return <div>{title}</div>;
};

export default DemoContent;
