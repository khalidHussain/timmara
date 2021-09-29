const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { orderService } = require('../services');

const createOrder = catchAsync(async (req, res) => {
  const order = await orderService.create(req.body);
  res.status(httpStatus.CREATED).send(order);
});

const getOrders = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await orderService.getAll(filter, options);
  res.send(result);
});

const getOrder = catchAsync(async (req, res) => {
  const order = await orderService.getById(req.params.orderId);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'order not found');
  }
  res.send(order);
});

const updateOrder = catchAsync(async (req, res) => {
  const order = await orderService.updatedById(req.params.orderId, req.body);
  res.send(order);
});

const deleteOrder = catchAsync(async (req, res) => {
  await orderService.deleteById(req.params.orderId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createOrder,
  getOrders,
  getOrder,
  deleteOrder,
  updateOrder,
};
