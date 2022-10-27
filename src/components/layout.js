import React from "react";
import { colours } from "../colors";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, hasFooter = true }) => {
  return (
    <div
      className="layout"
      style={{ backGroundColor: colours.white, height: "100%" }}
    >
      <Header />
      <div>{children}</div>
      {hasFooter && <Footer />}
    </div>
  );
};

export default Layout;
