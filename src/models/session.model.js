const mongoose = require('mongoose');
const Products = require('./products.model')
const { toJSON, paginate } = require('./plugins');

const sessionModal = mongoose.Schema(
    {
        Products: [Products]
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sessionModal.plugin(toJSON);
sessionModal.plugin(paginate);

/**
 * @typedef Products
 */
const Products = mongoose.model('session', sessionModal);

module.exports = Products;
