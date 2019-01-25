import React, { Component } from "react";
import Contents from "components/Contents";
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
        <div className="cardTitle">
          <h3>{this.props.title}</h3>
        </div>
        <div className="cardAuthor">{this.props.author}</div>
        <div className="cardRegdate">{this.props.regdate}</div>
      </div>
    );
  }
}

export default Card;
