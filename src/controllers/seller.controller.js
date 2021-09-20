const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { sellerService } = require('../services');

const createseller = catchAsync(async (req, res) => {
  const result = await sellerService.create(req.body);
  res.status(httpStatus.CREATED).send(result);
});

const getsellers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await sellerService.getAll(filter, options);
  res.send(result);
});

const getseller = catchAsync(async (req, res) => {
  const result = await sellerService.getById(req.params.sellerId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'seller not found');
  }
  res.send(result);
});

const updateseller = catchAsync(async (req, res) => {
  const result = await sellerService.updatedById(req.params.sellerId, req.body);
  res.send(result);
});

const deleteseller = catchAsync(async (req, res) => {
  await sellerService.deleteById(req.params.sellerId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createseller,
  getsellers,
  getseller,
  deleteseller,
  updateseller,
};
