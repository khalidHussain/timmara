const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sellerId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'seller',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);

/**
 * @typedef Products
 */
const Products = mongoose.model('product', productSchema);

module.exports = Products;
