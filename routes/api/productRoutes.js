const router = require("express").Router();
const productController = require("../../controllers/productController");


// Matches with "/api/provider"
router.route("/")
    .get(productController.findAll)
    .post(productController.create);

// Matches with "/api/provider/:id"
router
    .route("/:id")
    .get(productController.findById)
    .put(productController.update)
    .delete(productController.remove);

module.exports = router;