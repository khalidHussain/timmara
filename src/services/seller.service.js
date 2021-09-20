const httpStatus = require('http-status');
const { Sellers } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Generate flow
 * @param {Object} data
 * @returns {Object}
 */
const create = async (data) => {
  const seller = await Sellers.create(data);
  return seller;
};

/**
 * getAll by merchnat
 * @param {Object} filter
 * @param {Object} options
 * @returns {Array}
 */
const getAll = async (filter, options) => {
  const sellers = await Sellers.paginate(filter, options);
  if (!sellers) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No Data Found');
  }
  return sellers;
};

/**
 * Generate token
 * @param {string} id
 * @returns {Object}
 */
const getById = async (id) => {
  const sellers = await Sellers.findById(id);
  return sellers;
};

/**
 * Generate token
 * @param {String} id
 * @param {Object} data
 * @returns {Object}
 */
const updatedById = async (id, data) => {
  const sellers = await Sellers.findByIdAndUpdate(id, data);
  return sellers;
};

/**
 * Generate token
 * @param {String} id
 * @returns {Object}
 */
const deleteById = async (id) => {
  const sellers = await Sellers.deleteOne({ id });
  return sellers;
};

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updatedById,
};
