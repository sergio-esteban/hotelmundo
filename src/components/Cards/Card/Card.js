import React from "react";
import styles from './Card.css';

const Card = ({ name, stars, id, price }) => {
  return (
    <div className={styles.Card}>
      <img alt="hotels" src={`https://robohash.org/${id}?size=200x200`} />
      <h2>{name}</h2>
      <p>{stars}</p>
      <p>Precio por noche por habitación</p>
      <h1>
        <span className={styles.span}>ARS </span>
        {price}
      </h1>
      <button className={styles.btn}>Ver Hotel</button>
    </div>
  );
};

export default Card;
