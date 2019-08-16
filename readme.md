# Boilerplate for React UI libraries
[![Build Status](https://travis-ci.org/adyz/test-react-ts-npm-package.svg?branch=master)](https://travis-ci.org/adyz/test-react-ts-npm-package)

This is a boilerplate that allows you to create your own react components with React and Typescript.
Bellow you'll find a description on how to use this project from different points of view: User, Contributor and Creator.

## Using this project as a library

### Install
Run `npm install --save-dev test-react-ts-npm-package`

### Import single components (smaller bundle size)
```js

import Banner from "test-react-ts-npm-package/dist/banner";
import Button from "test-react-ts-npm-package/dist/button";

function App() {
  return (
    <div>
      <Banner name="John" />
      <Button>Go</Button>
    </div>
  );
}
```
[![Edit Usage of the test-react-ts-npm-package with simple react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/64m89m9pj3)

### Import the full library
```js

import Banner, { Button } from "test-react-ts-npm-package";
import

function App() {
  return (
    <div>
      <Banner name="Doe" />
      <Button>Planet</Button>
    </div>
  );
}
```


## Using this project as boilerplate
- Clone this project
- Modify the `package.json` file so that the new package name, version, etc fits your need.
- Follow the steps from bellow

## Using this project as contributor
- Clone this project
- Create a new branch along the lines of `feature/newcomponent`
- Install dependencies `npm install`
- Start the local development environment running `npm run storybook`
- Add your changes
- Add tests for your changes
- If you add new component, make sure to add that in the storybook editing the `stories/index.js` file
- Add the changes to git with `git add -A .`
- Commit your change using "Angular Commit Message Conventions" ([Read more](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)) using `npm run commit` and a wizard will guide you.
- Push the changes to origin and create a pull request.






