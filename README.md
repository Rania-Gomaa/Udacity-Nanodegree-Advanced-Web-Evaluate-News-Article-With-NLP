# Evaluate A News Article with Natural Language Processing

Project reviewed by Udacity through the Front End Web Development Advanced Nanodegree Program.

## Project Aim: 
Build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

## Tools:
* HTML
* SASS
* JS
* Webpack
* Node.js
* Express
* Jest framework
* MeaningCloud API

## Instructions to run the project in production mode

1. Install Node and npm.
2. Install Webpack and webpack-cli.
```
$ npm install webpack@4.46.0 webpack-cli --save-dev
```
3. Install used plugins and loaders.

```
# Choose the necessary installation for your development mode
$ npm i -D @babel/core @babel/preset-env babel-loader
$ npm i -D style-loader node-sass css-loader sass-loader
$ npm i -D clean-webpack-plugin
$ npm i -D html-webpack-plugin
$ npm i -D mini-css-extract-plugin
$ npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin@1.4.5
$ npm install file-loader --save-dev
$ npm install -D webpack-dev-server 

```
4. Signup for MeaningCloud API to get API key.
5. Configure environment variables in a .env file in project root and installing dotenv package.
```
$ npm install dotenv
```
6. start the project.
```
$ npm start ---> to start Express server
$ npm run build-prod  ---> generate dist folder
```
7. Open browser at http://localhost:8081/


## Offline functionality

* Service workers is used to offer offline functionality when the server is off
```
$ npm install workbox-webpack-plugin --save-de
```

## Testing

* Every Js file has at least one test using Jest framework

```
$ npm install -g --save-dev jest supertest--detectOpenHandles

# To run testing
$ npm run test --detectOpenHandles
```
