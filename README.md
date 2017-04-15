# ReactJS Template

This template provides a starter project for ReactJS applications.

Uses following tools / features: 
* NPM
* Babel
* Webpack

## Requirements

* Install [Node](https://nodejs.org/en/)

## Quick Start

Clone this repo and run the content locally:

```
$ npm install
$ npm run dev
```

* `npm install` will install the required node libraries under /node_modules
* `npm run dev` will serve up the React application in a browser window. It is designed for an efficient development process. As you make changes to the code, the browser will update to reflect the changes immediately.
* You can reach your app under `http://localhost:8080/` when webpack is up & running.

When you are ready to build the application for production, run the following command:

```
$ npm run build
```

This will build a production-ready package in the /src/client/public folder.

## Folder Structure

### Highest Level Structure

```
/node_modules
/src
```

* `node_modules:` Node.js modules downloaded by npm install (do not check in)
* `src:` contains all the client source files including HTML, styles (in SASS format), JavaScript and images


### Source Folder Structure

```
/src
    /client
        /app
        /public
```

The `src` folder contains only the source for the ReactJS application. It treats all 3 web technologies (HTML, CSS and JavaScript). At the highest level you will find the index html, css (well, scss) and js files:
* `index.html`
* `index.js`
* `App.js`
