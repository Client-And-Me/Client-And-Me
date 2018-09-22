import React from "react";

export const Col = ({ size, children }) => (
  <div className={"col " + size.split(" ").map(size => size).join(" ")}>
    {children}
  </div>
);
