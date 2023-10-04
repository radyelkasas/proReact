import React from "react";

const BoxServ = ({ text, icon }) => {
  return (
    <div className="box">
      <h1>{icon}</h1>
      <span>{text}</span>
      <p></p>
    </div>
  );
};

export default BoxServ;
