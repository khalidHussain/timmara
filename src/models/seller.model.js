const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const sellerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    semail: {
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
sellerSchema.plugin(toJSON);
sellerSchema.plugin(paginate);

/**
 * @typedef Token
 */
const Seller = mongoose.model('seller', sellerSchema);

module.exports = Seller;
