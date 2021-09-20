const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { buyerService } = require('../services');

const createbuyer = catchAsync(async (req, res) => {
  const result = await buyerService.create(req.body);
  res.status(httpStatus.CREATED).send(result);
});

const getbuyers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await buyerService.getAll(filter, options);
  res.send(result);
});

const getbuyer = catchAsync(async (req, res) => {
  const result = await buyerService.getById(req.params.buyerId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'buyer not found');
  }
  res.send(result);
});

const updatebuyer = catchAsync(async (req, res) => {
  const result = await buyerService.updatedById(req.params.buyerId, req.body);
  res.send(result);
});

const deletebuyer = catchAsync(async (req, res) => {
  await buyerService.deleteById(req.params.buyerId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createbuyer,
  getbuyers,
  getbuyer,
  deletebuyer,
  updatebuyer,
};
