import React from "react";
import styles from './Card.css';

const Card = ({ name, stars, id, price, image }) => {
  return (
    <div className={styles.Card}>
      {/* <img alt="hotel" src="https://api.imgur.com/3/album/d0S92Vo/images" /> */}
      <div>{image}</div>
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
