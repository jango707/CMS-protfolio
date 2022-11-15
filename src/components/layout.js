import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, hasFooter = true }) => {
  return (
    <div
      className="layout"
      style={{
        background: `linear-gradient(to right, #f6f9fc, #f0f9fc`,
        minHeight: "100vh",
      }}
    >
      <Header />
      <div>{children}</div>
      {hasFooter && <Footer />}
    </div>
  );
};

export default Layout;
