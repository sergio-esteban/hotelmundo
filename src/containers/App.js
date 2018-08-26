import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../assets/images/logo-almundo.svg";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

import { setSearchField } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchHotels.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      hotels: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(users => { this.setState({ hotels: users }) });
  }

  // onSearchChange = event => {
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    const { hotels } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredHotels = hotels.filter(hotel => {
      return hotel.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !hotels.length ?
      <h1>Loading...</h1> :
      (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="pa4 App-title">
            <h2>Filtros <span>▴</span></h2>
            <SearchBox searchChange={onSearchChange} />
          </div>
          <Scroll>
            <ErrorBoundry>
              <CardList hotels={filteredHotels} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
