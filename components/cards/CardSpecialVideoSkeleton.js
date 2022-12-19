import React from "react";

export default function CardSpecialVideoSkeleton() {
  return (
    <div
      style={{
        width: "310px",
        minHeight: "270px",
        height: "270px",
        minWidth: "310px",
      }}
      className="capitalize text-md transition duration-150 cursor-pointer flex justify-start items-center relative "
    >
      <div className="skeleton"></div>
    </div>
  );
}
