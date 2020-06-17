// db schema design

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// declare collection and types

let Recipes = new Schema(
  {
    recipe_id: {
      type: Number,
    },
    category_id: {
      type: Number,
    },
    title: {
      type: String,
    },
    photo_url: {
      type: String,
    },
    photosArray: {
      type: Array,
    },
    time: {
      type: String,
    },
    ingredients: {
      type: Array,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "recipes",
  }
);

module.exports = mongoose.model("Recipes", Recipes);
