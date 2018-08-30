import React, { Component } from "react";
import Card from "./Card/Card";
import styles from './CardList.css';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=100")
      .then(results => {
        return results.json();
      }).then(data => {
        let pictures = data.results.map((pic) => {
          return (
            <div key={pic.results}>
              <img alt="profile" src={pic.picture.large} />
            </div>
          )
        })
        this.setState({ pictures: pictures });
        console.log("state", this.state.pictures);
      })
  }

  render() {
    return (
      <div className={styles.cardlist}>
        {this.props.hotels.map((hotel, i) => {
          return (
            <Card
              key={hotel.id}
              image={this.state.pictures[i]}
              id={hotel.id}
              name={hotel.name}
              stars={hotel.stars}
              price={hotel.price}
              amenities={hotel.amenities}
            />
          );
        })}
      </div>
    )
  }

}

export default CardList;
