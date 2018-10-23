import React, { Component } from "react";
import { connect } from "react-redux";

class reduxTest extends Component {
  handleClick = () => {
    this.props.deletePost(1);
    // 삭제후 홈으로 다시 돌아가는 히스토리 동작을 해주면 됨
    // (ex) this.props.history.push('/')
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.handleClick}>deletePost</button>
      </div>
    );
  }
}

// getting store state and we're applying a property called post
// and going to map that to the props
const mapStateToProps = (state, ownProps) => {
  // let id = ownProps.match.params

  return {
    posts: state.posts // posts = 우리가 맵핑시킬 프로퍼티 , state.posts = 우리가 store에서 필요한 프로퍼티
    // 그 둘을 맵핑시키는 함수를 connect에 전달함
  };
};

// now dispatch the action!
// pass the dispatch method as a parameter
const mapDispatchToProps = dispatch => {
  // store.dispatch({type: ...})

  return {
    // deletePost = method will be attached to our props ( component can use this method )
    // 뒷부분 = deletePost 할 때마다 수행할 dispatching 동작
    deletePost: id => {
      dispatch({ type: "DELETE_POST", id: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxTest); // higher-order component wrapping component
