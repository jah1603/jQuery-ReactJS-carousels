import React from "react";

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={ `reach-slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);

export default Arrow;
