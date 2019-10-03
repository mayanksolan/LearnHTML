import React from "react";

export default function ValidationComponent(props) {
  const validText =
    props.paraLength <= 5 ? "Text too short" : "Text long enough";
  return <div>{validText}</div>;
}
