# react-clippy

A Simple Copy to Clipboard React component.

## Installation
> Note! This package depends on [React](https://facebook.github.io/react/) ^16

Using [npm](https://www.npmjs.com/):
```bash
npm install --save react-web-tabs
```
Using [yarn](https://yarnpkg.com/en/):
```bash
yarn add react-web-tabs
```

## Usage
Clippy is just a [Render Prop](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) with
two functions `setTarget` and `setTrigger`. Simply pass in your trigger and target elements and thats it.
```
import React from 'react';
import Clippy from 'react-clippy';

const App = () => (
  <Clippy>
    {(setTrigger, setTarget) => (
      <div>
        <span ref={el => setTarget(el)}>Revive clippy!</span>
        <button ref={el => setTrigger(el)}>Copy</button>
      </div>
    )}
  </Clippy>
);

export default App;
```


# API
`<Clippy>`

| Prop        | Type | Description                                        |
| ----------- |:----:| :--------------------------------------------------|
| onCopy      | func | callback that fires when text has been copied      |
| noSelection | bool | Disable selection of the copied text               |
| children    | func | The render prop that should return a React element |
