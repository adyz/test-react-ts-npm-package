# Boilerplate for react liraries
Create your own react components with React and Typescript


## Install
Run `npm install test-react-ts-npm-package`

## Import single components (smaller bundle size)
```js

import Banner from "test-react-ts-npm-package/dist/banner";
import Button from "test-react-ts-npm-package/dist/button";

function App() {
  return (
    <div>
      <Banner name="John" />
    </div>
  );
}
```

## Import the full library
```js

import Banner, { Button } from "test-react-ts-npm-package";
import

function App() {
  return (
    <div>
      <Banner name="John" />
      <Button>Go</Button>
    </div>
  );
}
```


# Development

- Clone this project, 
- Add your components in the `src/components` folder
- Run the tests
- Build the dist files






