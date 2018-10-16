import React, { Component } from 'react';

class Reaction extends Component {
    render(){
        return (
            <div className="reaction">
                {this.props.reaction.comment.map((comment) =>
                    <Comments comment={comment} key={comment.id} />
                )}
            </div>
        )
    }
}

export default Reaction;

class Comments extends Component {
    render() {
        return (
            <div className="comment">
                <p>{this.props.comment.author} <span>{this.props.comment.text}</span></p>
            </div>
        )
    }
}