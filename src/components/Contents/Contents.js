import React, { Component } from "react";
import PropTypes from "prop-types";

class Contents extends Component {
  render() {
    return (
      <div className="contents">
        <Photo img={this.props.img} />
        <Text text={this.props.text} />
      </div>
    );
  }
}

class Photo extends Component {
  render() {
    return <img src={this.props.img} />;
  }
}
class Text extends Component {
  render() {
    return <p>{this.props.text}</p>;
  }
}

Photo.propTypes = {
  img: PropTypes.string.isRequired
};

Text.propTypes = {
  text: PropTypes.string.isRequired
};
export default Contents;
