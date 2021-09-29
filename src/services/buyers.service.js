const httpStatus = require('http-status');
const { Buyers } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Generate flow
 * @param {Object} data
 * @returns {Object}
 */
const create = async (data) => {
  const buyer = await Buyers.create(data);
  return buyer;
};

/**
 * getAll by merchnat
 * @param {Object} filter
 * @param {Object} options
 * @returns {Array}
 */
const getAll = async (filter, options) => {
  const buyer = await Buyers.paginate(filter, options);
  if (!buyer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No Data Found');
  }
  return buyer;
};

/**
 * Generate token
 * @param {string} id
 * @returns {Object}
 */
const getById = async (id) => {
  const buyer = await Buyers.findById(id);
  return buyer;
};

/**
 * Generate token
 * @param {String} id
 * @param {Object} data
 * @returns {Object}
 */
const updatedById = async (id, data) => {
  const buyer = await Buyers.findByIdAndUpdate(id, data);
  return buyer;
};

/**
 * Generate token
 * @param {String} id
 * @returns {Object}
 */
const deleteById = async (id) => {
  const buyer = await Buyers.deleteOne({ id });
  return buyer;
};

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updatedById,
};
