# Simple React slider using only "react", "react-dom" + build related dependencies

## Description

- Works on mobile and desktop devices
- Support swipes
- Work for any HTML content
- Supports multiple items on the screen
- Supports infinite option
- Supports scrolling to a selected slide (go to X slide)

## Setup

#### Node.js and Yarn

Requires Node and Yarn installation.

- Node installation avilable at: https://nodejs.org/en/ 
-- Check version running command ```node -v``` in terminal:
```
v12.16.2
```
-- Check version running command ```npm -v``` in terminal:
```
6.14.4
```

Yarn installation
```
npm install -g yarn

yarn -v
1.22.4
```
#### Dependencies

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

Install one by one:
```
npm install -g live-server@1.2.1
npm install -g babel-cli@6.24.1
yarn add babel-core@6.25.0
yarn add babel-loader@7.1.1
yarn add babel-plugin-transform-class-properties@6.24.1
yarn add babel-preset-env@1.5.2
yarn add babel-preset-react@6.24.1
yarn add webpack@3.1.0
yarn add webpack-dev-server@2.5.1
yarn add react@16.13.1
yarn add react-dom@16.13.1
yarn add css-loader@0.28.4
yarn add node-sass@4.14.1
yarn add sass-loader@7.3.1
yarn add style-loader@0.18.2
```

Install all together:
```
yarn add babel-cli@6.24.1 babel-core@6.25.0 babel-loader@7.1.1 babel-plugin-transform-class-properties@6.24.1 babel-preset-env@1.5.2 babel-preset-react@6.24.1 webpack@3.1.0 webpack-dev-server@2.5.1 live-server@1.2.1 react@16.13.1 react-dom@16.13.1 css-loader@0.28.4 node-sass@4.14.1 sass-loader@7.3.1 style-loader@0.18.2
```
 
 ## Start
 
 To start the application run following command on terminal
 ```
 yarn run dev-server
 ```
  
  Project is running at http://localhost:8080/
