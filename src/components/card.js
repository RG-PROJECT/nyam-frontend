import React, { Component } from "react";
// import PropTypes from 'prop-types';
import Contents from "./contents";
import Reaction from "./reaction";
import "./card.css";

class Card extends Component {
  render() {
    const card = this.props.data;
    return (
      <div className="card">
        <Header
          title={card.title}
          author={card.author}
          regdate={card.regdate}
        />
        <Contents img={card.img} text={card.text} />
        {/* <Reaction reaction={card.reaction} /> */}
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="cardHeader">
        <h3>{this.props.title}</h3>
        <div className="cardAuthor">{this.props.author}</div>
        <div className="cardRegdate">{this.props.regdate}</div>
      </div>
    );
  }
}

export default Card;
