# Simple React slider using only "react", "react-dom" + build related dependencies

## Description

- Works on mobile and desktop devices
- Support swipes
- Work for any HTML content
- Supports multiple items on the screen
- Supports infinite option
- Supports scrolling to a selected slide (go to X slide)

## Setup

###Node.js and Yarn

Requires Node and Yarn installation.
Node installation aviable at: https://nodejs.org/en/

Checking versions using terminal
node -v
```
v12.16.2
```
npm -v
```
6.14.4
```

Yarn installation
npm install -g yarn

yarn -v
```
1.22.4
```
###Dependencies

Required dependencies:
```
"dependencies": {
    "babel-cli": "6.24.1",
    "babel-core": "6.25.0",
    "babel-loader": "7.1.1",
    "babel-plugin-transform-class-properties": "6.24.1",
    "babel-preset-env": "1.5.2",
    "babel-preset-react": "6.24.1",
    "css-loader": "0.28.4",
    "live-server": "1.2.1",
    "node-sass": "^4.14.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "sass-loader": "7.3.1",
    "style-loader": "0.18.2",
    "webpack": "3.1.0",
    "webpack-dev-server": "2.5.1"
  }
 ``` 
It is adviced to use exact versions. Dependecies can be installed using ```yarn add``` or ```npm install``` commands.

```
yarn add babel-cli@6.24.1 babel-core@6.25.0 babel-loader@7.1.1 babel-plugin-transform-class-properties@6.24.1 babel-preset-env@1.5.2 babel-preset-react@6.24.1 webpack@3.1.0 webpack-dev-server@2.5.1 live-server@1.2.1 react@16.13.1 react-dom@16.13.1 css-loader@0.28.4 node-sass@4.14.1 sass-loader@7.3.1 style-loader@0.18.2
```
 
 ## Start
 ```
  yarn run dev-server
  ````
  
  Project is running at http://localhost:8080/
