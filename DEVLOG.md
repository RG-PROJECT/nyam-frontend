# DEVLOG

A Log about what I develop

## 🐍 Rendering function

```javascript
_renderCards = () => {
  const cards = this.state.cards.map(card => {
    return <Card key={card._id} data={card} />;
  });
  return cards;
};

_renderLoading = () => {
  return <h1>Loading...</h1>;
};
```

## 🐢 fetch API

How to use async/await?

1. Add `await` keyword in front of the async function which returns `Promise` object
2. Add `async` keyword in front of the function which must be defined earlier and has `await` function inside.

- `await` keyword only be used inside `async` function
- Thinking about this : [ES7 async functions](https://jakearchibald.com/2014/es7-async-functions/)
  ```javascript
  async function loadData() {
    const data = await callApi(); // Func callApi() returns Promise
  }
  ```

and now...

1. Turn on nyam-backend server on localhost
2. Fetch data from the API server
3. Add card state for the first time
4. Let all those do after component mounting.

```javascript
  componentDidMount() {
    this._getCards();
  }

  _getCards = async () => {
    const cards = await this._callApi();
    this.setState({
      cards
    });
  };

  _callApi = () => {
    return fetch("http://localhost:3000/cards")
      .then(result => result.json())
      .catch(err => console.log(err));
  };
```
