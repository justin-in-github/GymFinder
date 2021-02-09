const express = require("express");
const router = express.Router();
const portfolio = require("../controllers/portfolio")
const catchAsync = require("../utils/catchAsync");


router.get("/portfolio", catchAsync(portfolio.index))
router.get("/portfolio1", catchAsync(portfolio.portfolio_item_1))

module.exports = router;