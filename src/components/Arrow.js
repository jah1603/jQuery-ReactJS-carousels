import React from "react";

const Arrow = ({ direction, clickFunction, glyph, project }) => (
  <div
    className={ `${project}-slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);

export default Arrow;
