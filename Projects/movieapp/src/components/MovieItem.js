import React from "react";

export default function MovieItem(props) {
  console.log(props.movie);
  return <div>{props.movie.Title}</div>;
}
