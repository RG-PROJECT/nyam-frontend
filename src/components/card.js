import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Contents from './contents';
import Reaction from './reaction';
import './card.css';

class Card extends Component {
    render(){
        return (
            <div className="card">
                <Header
                    title={this.props.title}
                    author={this.props.author}
                    regdate={this.props.regdate}
                />
                <Contents
                    img={this.props.contents.img}
                    text={this.props.contents.text}
                />
                <Reaction reaction={this.props.reaction} />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div className="cardHeader">
                <h1>{this.props.title}</h1>
                <div className="cardAuthor">{this.props.author}</div>
                <div className="cardRegdate">{this.props.regdate}</div>
            </div>
        )
    }
}

export default Card;