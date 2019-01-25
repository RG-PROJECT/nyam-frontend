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
    const { title, author, regdate } = this.props;

    return (
      <div className="cardHeader">
        <div className="cardTitle">
          <h3>{title}</h3>
        </div>
        <div className="cardAuthor">{author.name}</div>
        <div className="cardRegdate">{regdate}</div>
      </div>
    );
  }
}

export default Card;
