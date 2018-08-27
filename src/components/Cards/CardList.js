import React from "react";
import Card from "./Card/Card";

const CardList = ({ hotels }) => {
  return (
    <div>
      {hotels.map((user, i) => {
        return (
          <Card
            key={i}
            id={hotels[i].id}
            name={hotels[i].name}
            stars={hotels[i].stars}
            price={hotels[i].price}
          />
        );
      })}
    </div>
  );
};

export default CardList;
