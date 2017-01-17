# IMDB
We are going to be building a simplified version of IMDB.

The app will have four main parts:
- A Navbar that has a link to the 'All Movies' page, and the 'Add a Movie' page.
- A page that has a list of all movies in the database, ordered by rating
- A page with an input from that will let you create and save new movies to the database
- A 'movie details' page; when you click on a movie, you should be taken to that specific movie's 'movie details' page, which contains all of the information for that particular movie.

You will need to setup and Express server and API. The API should have the following endpoints:

- `/api/movies` to GET all movies
- `/api/create-movie` to POST (aka create) a new movie
- `/api/movies/:id` to GET an individual movie
- `/api/movies/:id` to DELETE an individual movie
- `/api/movies/:id` to PUT (update) an individual movie

## Setup Instructions
### Step 1 - npm install
Create a `package.json` file and install the necessary modules.
### Step 2 - webpack.config.js
Create a `webpack.config.js` file with the code below.
```js
const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/app.js",
  output: {
    path: path.join(__dirname),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', `react`]
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
```

### Step 3
Run the `seed.js` file to populate your database. Run it by entering `node seed` into your terminal (make sure you're in the correct directory)


**Challenge/Extra Credit**
Convert the application to have Redux store the state of the application.
