import React from "react";


function MovieCard(props) {
  return (
    <div className="MovieCard" style={{ width: 200, padding: 5 }}>
      <img className="MoviePoster" alt='img' src={props.posterURL} />
      <div className="Title">{props.Title}</div>
      <div className="Bio">
        <h4>Overview</h4>
        {props.Description}
      </div>
    </div>
  );
}

export default MovieCard;
