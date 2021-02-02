import React from "react";

export default function Button(props) {
  return (
    <button type="button" className="btn custom-button">
      {props.text}
    </button>
  );
}
