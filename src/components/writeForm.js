import React, { Component } from 'react';

class WriteForm extends Component {
    state = {
        title: '',
        content:''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render(){
        return (
            <form>
                <input
                    placeholder="제목"
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                    />
                <input
                    placeholder="내용"
                    value={this.state.content}
                    onChange={this.handleChange}
                    name="content"
                />
                <div>{this.state.title}</div>
                <div>{this.state.content}</div>
            </form>
        )
    }
}
export default WriteForm;