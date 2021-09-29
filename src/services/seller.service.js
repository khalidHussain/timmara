const httpStatus = require('http-status');
const { Sellers, Products, Order } = require('../models');
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

/**
 * Generate token
 * @param {String} sellerId
 * @returns {Object}
 */
const getMyOrders = async (sellerId) => {
  const myProducts = await Products.findMany({ sellerId });
  const products = myProducts.map(item => item.id);
  const orders = await Order.findMany({ products: [{ product: { $in: products } }] })
  return orders;
};

const getTopSellert = async () => {
  const orders = await Order.paginate({}, { sortBy: '-createdAt', limit: 1000 });
  const productsORdered = [];
  orders.each(item => productsORdered.concat(item.products));
  const topSellers = {};
  productsORdered.each(item => topSellers[item.seller] ?
    topSellers[item.seller] += 1 : topSellers[item.seller] = 1);
  const topSellerValues = Object.values(topSellers).sort().slice(0, 10);
  const top = [];
  topSellerValues.forEach((key, value) => topSellerValues.includes(value) && top.push(key));
  return top;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updatedById,
};
