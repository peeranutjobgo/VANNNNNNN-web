import React from "react";

export default function Section1({id,subtitle}) {
  return (
    <div className="section_bg1">
      <div className="section-content" id={id}>
        <h1>asdasdasd</h1>
        <div className = "section_in">
        <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}