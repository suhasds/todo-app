let express = require("express");
let router = express.Router();
let todosController = require("../controller/todosController");

router.get("/", todosController.index);
router.post("/", todosController.store);
router.put("/", todosController.update);
router.delete("/", todosController.destroy);


module.exports = router;