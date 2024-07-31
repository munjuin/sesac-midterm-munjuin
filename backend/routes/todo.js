const express = require("express");
const router = express.Router();
const controller = require("../controller/Ctodo");

router.post("/todos", controller.postTodos);

module.exports = router;
