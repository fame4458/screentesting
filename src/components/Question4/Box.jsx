import React from "react";

export default function Box(props) {
  return (
    <div className="text-center py-3 m-0" style={{ backgroundColor: "#F5E8DF" }}>
      <h3>{props.count}</h3>
      <p className="p-0 m-0">{props.text}</p>
    </div>
  );
}
