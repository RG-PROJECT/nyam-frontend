import React, { Component } from "react";
import Card from "./components/card";
import WriteForm from "./components/writeForm";
import { connect } from "react-redux";
import ReduxTest from "./components/reduxTest";

const commentArr = [
  {
    id: 1,
    status: "OK",
    regdate: "20181011",
    author: "TOTO",
    text: "good job godori 👏"
  },
  {
    id: 19,
    status: "OK",
    regdate: "20181012",
    author: "KONG",
    text: "ㅇㅇ"
  }
];

const cardInfo1 = {
  id: 1,
  status: "OK",
  title: "my meal~~",
  author: "godori",
  regdate: "20181010", // Date Type 시간추가 (시간 대충가는 라이브러리)
  contents: {
    img: "https://picsum.photos/200",
    text: "나는 이런 밥을 먹었고 점심은 이러했다.\n저녁은 이거 먹을거임"
  },
  reaction: {
    comment: commentArr
  },
  comments: commentArr
};

const cardInfo2 = {
  id: 2,
  status: "OK",
  title: "밥뭇나",
  author: "TOTO",
  regdate: "20181016",
  contents: {
    img: "https://picsum.photos/201",
    text:
      "토토는 토토해 토토는 토토해 토토는 토토해 토토는 토토해 토토는 토토해 토토는 토토해 토토는 토토해 토토는 토토해 "
  },
  reaction: {
    comment: commentArr
  }
};

const cardInfo3 = {
  id: 3,
  status: "OK",
  title: "더미데이터 귀찮아",
  author: "Deer.White",
  regdate: "20181011",
  contents: {
    img: "https://picsum.photos/203",
    text: "냥냥구들 귀여워 ~! "
  },
  reaction: {
    comment: commentArr
  }
};

class App extends Component {
  state = {
    cardList: [cardInfo1, cardInfo2],
    title: "",
    content: ""
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        cardList: [cardInfo3, ...this.state.cardList]
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <ReduxTest />
        <WriteForm />
        {this.state.cardList.map(card => {
          return (
            <Card
              title={card.title}
              author={card.author}
              regdate={card.regdate}
              contents={card.contents}
              reaction={card.reaction}
              key={card.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
