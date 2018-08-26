import React from "react";

const Card = ({ name, stars, id, price }) => {
  return (
    <div className="flex tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="hotels" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{stars}</p>
        <p>
          <span>ARS </span>
          {price}
        </p>
        <button className="tc white bg-dark-blue dib br3 pa2">Ver Hotel</button>
      </div>
    </div>
  );
};

export default Card;
