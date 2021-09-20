const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const buyerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
buyerSchema.plugin(toJSON);

/**
 * @typedef Buyers
 */
const Buyers = mongoose.model('buyer', buyerSchema);

module.exports = Buyers;
