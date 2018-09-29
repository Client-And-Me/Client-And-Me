const router = require("express").Router();
const joinTableController = require("../../controllers/joinTableController");


// Matches with "/api/provider"
router.route("/")
    .get(joinTableController.findAll)
    .post(joinTableController.create);

// Matches with "/api/provider/:id"
router
    .route("/:id")
    .get(joinTableController.findById)
    .put(joinTableController.update)
    .delete(joinTableController.remove);

module.exports = router;