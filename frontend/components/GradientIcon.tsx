import React from "react";

export const GradientIcon = ({ children, focus }: { children: React.ReactElement; focus?: boolean }) => {
  return (
    <div className="mr-4">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#FF7AE4" offset="0%" />
            <stop stopColor="#E088FB" offset="33%" />
            <stop stopColor="#81ACF8" offset="66%" />
          </linearGradient>
        </defs>
      </svg>
      {React.cloneElement(children, {
        style: focus ? { stroke: "url(#icon-gradient)" } : { stroke: "black" },
      })}
    </div>
  );
};
