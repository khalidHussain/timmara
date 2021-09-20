const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const orderSchema = mongoose.Schema(
  {
    buyer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'buyer',
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.SchemaType.ObjectId,
          ref: 'product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);

/**
 * @typedef Products
 */
const Orders = mongoose.model('order', orderSchema);

module.exports = Orders;
