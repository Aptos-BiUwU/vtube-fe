import React from "react";

type SectionTitleProps = {
  icon: React.ReactElement;
  title: string;
};

export default function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 mb-4">
      {icon &&
        React.cloneElement(icon, {
          width: "40px",
          height: "40px",
        })}
      <h3 className="text-2xl font-[FairyMuffin]">{title}</h3>
    </div>
  );
}
