const httpStatus = require('http-status');
const { Products } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Generate flow
 * @param {Object} data
 * @returns {Object}
 */
const create = async (data) => {
  const product = await Products.create(data);
  return product;
};

/**
 * getAll by merchnat
 * @param {Object} filter
 * @param {Object} options
 * @returns {Array}
 */
const getAll = async (filter, options) => {
  const products = await Products.paginate(filter, options);
  if (!products) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No Data Found');
  }
  return products;
};

/**
 * Generate token
 * @param {string} id
 * @returns {Object}
 */
const getById = async (id) => {
  const products = await Products.findById(id);
  return products;
};

/**
 * Generate token
 * @param {String} id
 * @param {Object} data
 * @returns {Object}
 */
const updatedById = async (id, data) => {
  const products = await Products.findByIdAndUpdate(id, data);
  return products;
};

/**
 * Generate token
 * @param {String} id
 * @returns {Object}
 */
const deleteById = async (id) => {
  const products = await Products.deleteOne({ id });
  return products;
};

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updatedById,
};
