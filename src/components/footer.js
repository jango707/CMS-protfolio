import React from "react";

const Footer = () => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <hr style={{ margin: "50px 15%" }} />
      <p>&copy; Jang Belche {new Date().getFullYear()}</p>
      <br />
    </div>
  );
};

export default Footer;
