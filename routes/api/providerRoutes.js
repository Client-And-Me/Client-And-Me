const router = require("express").Router();
const providerController = require("../../controllers/providerController");


// Matches with "/api/provider"
router.route("/")
    //.get(providerController.findAll)
    .post(providerController.create);

// Matches with "/api/provider/:id"
router.route("/:id")
// .get(providerController.findById)
// .put(providerController.update)
// .delete(providerController.remove);

module.exports = router;