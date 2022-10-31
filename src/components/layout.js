import React from "react";
import { colours } from "../colors";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, hasFooter = true }) => {
  return (
    <div
      className="layout"
      style={{
        background: `linear-gradient(to right, #f6f9fc, #f0f9fc`,
        height: "100%",
      }}
    >
      <Header />
      <div>{children}</div>
      {hasFooter && <Footer />}
    </div>
  );
};

export default Layout;
