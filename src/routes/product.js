const express = require("express");

const productsRouter = express.Router();

const {get, post, patch, clear, search, filter, sort} = require("../controller/product");

productsRouter.get("/get", get);

productsRouter.get("/:category", filter)


productsRouter.get("/", search);


productsRouter.post("/", post);

productsRouter.patch("/:id", patch);

productsRouter.delete("/:id", clear);

productsRouter.get("/sorts", sort);



module.exports = productsRouter;
