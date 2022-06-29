// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="contact-header">
        <h2>Call a Friend</h2>
        <p>your friendly contact app</p>
        <hr />
      </div>
    </>
  );
};

export default Header;
