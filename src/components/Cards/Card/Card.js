import React from "react";
// import classes from './Card.css';

const Card = ({ name, stars, id, price }) => {
  return (
    <div className="tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-5 Card">
      <img alt="hotels" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{stars}</p>
        <p>
          <span>ARS </span>
          {price}
        </p>
        <button className="tc white bg-dark-blue dib br3 pa2 btn header__btn">Ver Hotel</button>
      </div>
    </div>
  );
};

export default Card;
