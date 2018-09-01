import React from "react";
import styles from './Card.css';

const Card = ({ name, stars, price, image, amenities }) => {
  return (
    <div className={styles.Card}>
      {/* <img alt="hotel" src="https://api.imgur.com/3/album/d0S92Vo/images" /> */}
      <div className={styles.picture}>{image}</div>
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>{stars}</p>
        <ul>
          {amenities.map((icon, i) => (
            <li key={i}>{icon}</li>
            // return <img key={i} height="87px" width="100px" alt="amenities" src={`../../../assets/icons/amenities/${icon}.svg`} />
          ))}
        </ul>
      </div>
      <div className={styles.callAction}>
        <p>Precio por noche por<br></br> habitación</p>
        <h1>
          <span className={styles.span}>ARS </span>
          {price}
        </h1>
        <button className={styles.btn}>Ver hotel</button>
      </div>
    </div >
  );
};

export default Card;
