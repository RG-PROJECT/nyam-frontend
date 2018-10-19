## TIP / TIL

# Useful Things

### 🎨 Code Formatter

- Recommanded Code Formatter is `Prettier`
- Install `Prettier` Plugin (VS Code)
- Settings(cmd+,) -> Editor tab -> Activate `Format On Save`
- Or add `"editor.formatOnSave": true` to user setting file

### 🏞 Sample Image Url

- Get random image easily from `https://picsum.photos/200`
- If you Change the number of the last, you can get more images.

# React

### Simple React Snippets

- Create component file as `*.jsx`
- And install plugin `Simple React Snippets` (VS Code)
- Then, we can use `Snippet Renders`

  ```javascript
    imrc	Import React / Component :
    import React, { Component } from 'react';

    cc	Class Component :
    class [CLASSNAME] extends Component {
        state = {  }
        render() {
            return (  );
        }
    }
    export default [CLASSNAME];
  ```

- `export default [CLASSNAME]` and `class [CLASSNAME]` can be integrated as one line

  ```javascript
      class [CLASSNAME] extends Component { ... }
      export default [CLASSNAME];

      => export default class [CLASSNAME] extends Component { ... }
  ```

  c.f. Result of code snippet `cc` is created seperated shape as a default.

### Fragment (React v16)

- Use `<Fragment>` instead of `<div>`.
- Fragment let you group a list of children without adding extra nodes (ex. div tag)
- Then, there is no need to return `div` and rendered html element has no `<div>` tag also.

```javascript
  render() {
    return (
      <React.Fragment>
        <h1>Hello world</h1>
        <button>Button</button>
      </React.Fragment>
    );
  }
```

Rendering result :

```html
    <!-- not use Fragment -->
    <div>
        <h1>Hello world</h1>
        <button>Button</button>
    </div>

    <!-- use Fragment -->
    <h1>Hello world</h1>
    <button>Button</button>
```

### Import Styles

- Install `Bootstrap` by npm
  ```
  npm i bootstrap
  ```
  And import it from `index.js`
  ```javascript
  import "bootstrap/dist/css/bootstrap.css";
  ```

### Basic JS for React

- `falsy` : stop there!

- `truthy` : continue!

string and number (except 0) is truthy

```javascript
true && false; // false

true && "Hi"; // "Hi"

true && "Hi" && 1; // 1
```

That's why expression in return result is Plain Text `"Please create a new tag!"`

```javascript
state = { tags: [] }

render() {
    return ({ this.state.tags.length === 0 && "Please create a new tag!"; })
}
```

## About `this`.state

- In **obj.method()** : `this` is a reference of the `object`
- In **function()** : `this` is a reference of the `window`
