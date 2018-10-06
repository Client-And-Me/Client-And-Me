const router = require("express").Router();
const providerController = require("../../controllers/providerController");


// Matches with "/api/provider"
router.route("/")
    //.get(providerController.findAll)
    .post(providerController.create);

// Matches with "/api/provider/:id"
router.route("/:id")
    .get(providerController.isProvider)

router.route("/info/:id")
    .get(providerController.providerInfo)
// .put(providerController.update)
// .delete(providerController.remove);

router.route("/clients/:id")
    .get(providerController.providerClientsInfo)

module.exports = router;