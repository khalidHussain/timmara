const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const orderSchema = mongoose.Schema(
  {
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'buyer',
      required: true,
    },
    status: {
      type: String,
      default: 'created',
      enum: ['created', 'completed'],
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
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
