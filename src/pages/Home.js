import React, { Component } from "react";
import Card from "components/Card";
import HeaderNav from "components/Nav";
// import * as api from "lib/api";
import "./home.css";
import axios from "axios";
import addButton from "resources/addButton.svg";
const BACKEND_HOSTNAME = "nyam.deerwhite.net";
const BACKEND_PORT = "2083";

const GET_CARD_API = "https://nyam.deerwhite.net:2083/cards";
const IS_LOGGED_URL = "https://nyam.deerwhite.net:2083/users/me";

class Home extends Component {
  state = {};

  checkLogin = () => {
    axios
      .get(IS_LOGGED_URL)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getCardList();
  }

  getCardList = async () => {
    try {
      const cards = await this.getApi(GET_CARD_API);
      this.setState({
        cards
      });
    } catch (e) {
      console.error(e);
    }
  };

  getApi = async url => {
    return axios
      .get(url)
      .then(result => result.data)
      .catch(err => console.log(err));
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
    return (
      <>
        <HeaderNav />
        <div className={cards ? "App" : "Loading"}>
          <div className="cardWrapper">
            {this.state.cards ? this._renderCards() : this._renderLoading()}
            <div className="buttonArea">
              <img
                src={addButton}
                className="card-add-button"
                alt="add button"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
