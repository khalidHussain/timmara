const httpStatus = require('http-status');
const { Order } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Generate flow
 * @param {Object} data
 * @returns {Object}
 */
const create = async (data) => {
  const order = await Order.create(data);
  return order;
};

/**
 * getAll by merchnat
 * @param {Object} filter
 * @param {Object} options
 * @returns {Array}
 */
const getAll = async (filter, options) => {
  const orders = await Order.paginate(filter, options);
  if (!orders) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No Data Found');
  }
  return orders;
};

/**
 * Generate token
 * @param {string} id
 * @returns {Object}
 */
const getById = async (id) => {
  const orders = await Order.findById(id);
  return orders;
};

/**
 * Generate token
 * @param {String} id
 * @param {Object} data
 * @returns {Object}
 */
const updatedById = async (id, data) => {
  const orders = await Order.findByIdAndUpdate(id, data);
  return orders;
};

/**
 * Generate token
 * @param {String} id
 * @returns {Object}
 */
const deleteById = async (id) => {
  const orders = await Order.deleteOne({ id });
  return orders;
};

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updatedById,
};
