import React, { Component } from "react";
import "./App.css";
import Card from "./components/card";
import WriteForm from "./components/writeForm";
import { connect } from "react-redux";
import ReduxTest from "./components/reduxTest";
import addButton from "./resources/addButton.svg";

const BACKEND_HOSTNAME = "nyam.deerwhite.net";
const BACKEND_PORT = "2083";

class App extends Component {
  state = {};

  componentDidMount() {
    this._getCards();
  }

  _getCards = async () => {
    const cards = await this._callApi();
    this.setState({
      cards
    });
  };

  _callApi = () => {
    return (
      fetch("https://nyam.deerwhite.net:2083/cards")
        // return fetch(`//${BACKEND_HOSTNAME}:${BACKEND_PORT}/cards`)
        .then(result => result.json())
        .catch(err => console.log(err))
    );
  };

  _renderCards = () => {
    const cards = this.state.cards.map(card => {
      return <Card key={card._id} data={card} />;
    });
    return cards;
  };

  _renderLoading = () => {
    return <h1>Loading...</h1>;
  };

  render() {
    const { cards } = this.state;
    {
      console.log(cards);
    }
    return (
      <div className={cards ? "App" : "Loading"}>
        <div className="cardWrapper">
          {this.state.cards ? this._renderCards() : this._renderLoading()}
          <div className="buttonArea">
            <img src={addButton} className="card-add-button" alt="add-button" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
