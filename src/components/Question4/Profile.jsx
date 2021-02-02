import React from "react";

export default function Profile(props) {
  return (
    <div className="text-center">
      <img
        src="/anakin.png"
        alt="profile"
        width="15%"
        height="15%"
        style={{ borderRadius: "50%" }}
      />
      <h3>{props.name}</h3>
      <p>{props.position}</p>
    </div>
  );
}
