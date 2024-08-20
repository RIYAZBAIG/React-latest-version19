import React from "react";

const SeriesLists = (props) => {
    const { img_url, name, rating, description, genre, cast, watch_url } = props.currentElem;

    return (
        <li>
          <div>
            <img src={img_url} alt={name} height="150%" width="100%" />
            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p>Summary: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={watch_url} target="_blank" rel="noopener noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </li>
      );
};

export default SeriesLists;
