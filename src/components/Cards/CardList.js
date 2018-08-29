import React, { Component } from "react";
import Card from "./Card/Card";

// const CardList = ({ hotels }) => {
//   return (
//     <div>
//       {hotels.map((user, i) => {
//         return (
//           <Card
//             key={i}
//             id={hotels[i].id}
//             name={hotels[i].name}
//             stars={hotels[i].stars}
//             price={hotels[i].price}
//             image={hotels[i].image}
//           />
//         );
//       })}
//     </div>
//   );
// };

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
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
              <img alt="profile" src={pic.picture.medium} />
            </div>
          )
        })
        this.setState({ pictures: pictures });
        console.log("state", this.state.pictures);
      })
  }

  render() {
    return (
      <div>
        {/* <div>
          {this.state.pictures}
        </div> */}
        {this.props.hotels.map((hotel, i) => {
          return (
            <Card
              key={hotel.id}
              // id={hotel.id}
              name={hotel.name}
              stars={hotel.stars}
              price={hotel.price}
              image={this.state.pictures[i]}
            />
          );
        })}
      </div>
    )
  }

}

export default CardList;
