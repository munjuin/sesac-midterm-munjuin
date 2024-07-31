const express = require("express");
const router = express.Router();
const controller = require("../controller/Ctodo");

router.post("/todos", controller.postTodos);
router.get("/todos", controller.getTodos);
router.get("/todos/:id", controller.getTodosId);
router.patch("/todos/:id", controller.patchTodosId);
router.delete("/todos/:id", controller.deleteTodosId);

module.exports = router;
