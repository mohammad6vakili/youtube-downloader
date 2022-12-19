import React from "react";

export default function CardMultipleVideo({ data }) {
  return (
    <div
      onClick={() => console.log(data)}
      style={{ width: "100%", height: "400px", border: "1px solid red" }}
    ></div>
  );
}
