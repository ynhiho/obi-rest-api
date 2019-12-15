const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products"
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: "getting product data by id...",
    id: id
  });
});

module.exports = router;
