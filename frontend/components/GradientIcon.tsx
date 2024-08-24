import React from "react";

export const GradientIcon = ({ children, focus }: { children: React.ReactElement; focus?: boolean }) => {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="icon-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#F6CDFA" offset="0%" />
          <stop stopColor="#B8D7FB" offset="25%" />
          <stop stopColor="#FBC9FF" offset="50%" />
          <stop stopColor="#CCE3FE" offset="75%" />
          <stop stopColor="#F8ADFF" offset="80%" />
        </linearGradient>
      </svg>
      {React.cloneElement(children, {
        style: focus ? { stroke: "url(#icon-gradient)" } : { stroke: "#7C6D8E" },
      })}
    </>
  );
};
