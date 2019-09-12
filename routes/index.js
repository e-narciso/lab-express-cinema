const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
  .then(movies => {
    const dataMovies = movies;
    console.log(dataMovies);
    res.render("movies.hbs", { dataMovies });
  })
  .catch(err => {
    console.error(err);
    throw err;
  });
})

module.exports = router;
