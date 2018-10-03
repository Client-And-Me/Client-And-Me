const router = require("express").Router(),
    appointments = require("./appointmentRoutes.js");
// clients = require("./clientRoutes.js"),
provider = require("./providerRoutes.js")

router.use("/appointments", appointments);
router.use("/provider", provider);

module.exports = router;